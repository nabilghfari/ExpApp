import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../pages/HomeScreen';

const Stack = createNativeStackNavigator();

const Appstack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Homescreen}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Appstack;
