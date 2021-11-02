import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Formbutton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const Profilescreen = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Hello {user.uid}</Text>
            <Formbutton buttonTitle='Logout' onPress={() => logout()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    txt:{
        fontSize: 20,
        color: '#666666'
    },
})

export default Profilescreen;
