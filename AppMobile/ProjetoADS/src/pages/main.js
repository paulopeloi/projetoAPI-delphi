import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground, AsyncStorage} from 'react-native';
import api from '../services/api';

export default class Main extends Component{
    state = {
      materia : []
    }

    componentDidMount(){
        this.loadmateria();
    }

    loadmateria = async () => {
        // const value = await AsyncStorage.getItem('@materia');

        const response = await api.get('/materia');

        // await AsyncStorage.setItem('@materia', JSON.stringify(response.data));
        
        this.setState({materia:response.data});
    }

    setStyleIndex(index){
      var i = index;

      if (i > 4){
        i -= 5;
      }

      if (i == 0){
        return{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#efa15d',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
          padding: 20,
          marginBottom: 20
        }
      }
      
      if (i == 1){
        return{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#009EB4',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
          padding: 20,
          marginBottom: 20
        }
      }

      if (i == 2){
        return{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EA5874',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
          padding: 20,
          marginBottom: 20
        }
      }

      if (i == 3){
        return{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#997ef4',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
          padding: 20,
          marginBottom: 20
        }
      }

      if (i == 4){
        return{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#68e1b9',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
          padding: 20,
          marginBottom: 20
        }
      }
    }

    renderItem = ({item, index}) => (
      <View style={this.setStyleIndex(index)}>
          <Text style={styles.nome}>{item.nome}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Detail', {user:item})
            }}
          >            
            <Text style={styles.git}>Alunos</Text>
          </TouchableOpacity>
      </View>
    )

    render(){
        return (
          <View style={styles.container}>
          <ImageBackground source={require('../imagens/rick-morty.jpg')} style={styles.imgBackground}/>
            <FlatList
              contentContainerStyle={styles.list}
              data={this.state.materia}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderItem}
            />
          </View>
        );
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },

    imgBackground: {
      width: '100%', 
      height: '100%', 
      position: 'absolute',
    },

    list: {
      padding: 40,
    },

    nome: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center'
    },

    semestre: {
      fontSize: 16,
      color: '#FFFDF5',
      marginTop: 5,
      lineHeight: 24,
    },

    git: {
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold',
    },

    button: {
      height: 60,
      width: 150,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: '#FFFDF5',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      padding: 20,
      textAlign: 'center',
    },

  });