import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign'

const Forminput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inpContainer}>
            <View style={styles.iconStyl}>
                <AntDesign name={iconType} size={25} color="#666"/>
            </View>
            <TextInput
                style={styles.inpt}
                value={labelValue}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inpContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    iconStyl: {
        padding: 5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    inpt:{
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Halvetica-Bold',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inptField:{
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
})

export default Forminput;
