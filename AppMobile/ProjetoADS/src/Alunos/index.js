import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Alunos extends Component{
    render(){
        return(
            <View>
                <Text>
                    {this.props.data.nome}
                </Text>
            </View>
        )
    }
}
export default Alunos;