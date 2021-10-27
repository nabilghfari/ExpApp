import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const Formbutton = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.btnContainer} {...rest}>
            <Text style={styles.btnText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        marginTop:10,
        width:'100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Halvetica-Bold',
    },
});

export default Formbutton;
