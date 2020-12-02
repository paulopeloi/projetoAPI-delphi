import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from './pages/main';
import Detail from './pages/detail';

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} options={StyleNav.defaul}/>
                <Stack.Screen name="Detail" component={Detail} options={StyleNav.defaul}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const StyleNav = {
    defaul: {
        title: 'ADS - Paulo Ricardo Peloi',
        headerTintColor: 'black',
        headerStyle: {
            backgroundColor: '#FFFDF5',
        },
    }
}