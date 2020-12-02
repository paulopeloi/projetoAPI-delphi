import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Container} from 'react-native';

import axios from 'axios';

export default function Detail ({ route }) {
    const id = route.params.user.id;

    const[alunos, setAlunos] = useState([]);

    function GetPosts(){
        axios.get('http://192.168.43.54:9002/materia/' + id +  '/aluno')
        .then(
            function(response){
                setAlunos(
                    response.data
                )
            
            }
        )       
    }

    useEffect(() => {
        GetPosts();
        }, [])

    
    function gerarItem(item){
        console.log(item.nome);
        return(
            <View>
                <Text>
                    nome
                </Text>
            </View>
        )
    }
        

    return(
        <Container>
        <View style={styles.container}>
            <FlatList
            data={alunos}
            keyExtractor={item => item.id.toString()}
            renderItem={gerarItem}
            />
        </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
