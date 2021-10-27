import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Row } from 'antd';

const Socialbutton = ({buttonTitle, btnType, color, backgroundColor, ...rest}) => {
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity style={[styles.btnContainer, {backgroundColor: bgColor}]} {...rest}>
            <View style={styles.iconWrpr}>
            <FontAwesome name={btnType} size={20} color={color} style={styles.icn}/>
            </View>
            <View style={styles.btnTxtWrpr}>
                <Text style={[styles.btnText, {color: color}]}>{buttonTitle}</Text>
            </View>
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
        flexDirection: 'row',
    },
    iconWrpr:{
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icn:{
        fontWeight: 'bold',
    },
    btnTxtWrpr:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Halvetica-Bold',
    },
})

export default Socialbutton;
