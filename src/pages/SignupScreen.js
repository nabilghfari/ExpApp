import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity, Image} from 'react-native'
import Forminput from '../components/FormInput';
import Formbutton from '../components/FormButton';
import Socialbutton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const Signupscreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

    const {register} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Create Your Account</Text>
            <Forminput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Forminput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <Forminput
                labelValue={confirmPass}
                onChangeText={(confirmPassword) => setConfirmPass(confirmPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <Formbutton
                buttonTitle="Sign Up"
                onPress={() => register(email, password)}
            />

            <View style={styles.txtInfo}>
                <Text style={styles.colorTxtInfo}>You confirm that you accept our </Text>
                <TouchableOpacity onPress={() => alert('ToS Clicked!')}>
                    <Text style={[styles.colorTxtInfo, {color:'#e88832'}]}>Terms of Service</Text>
                </TouchableOpacity>
                <Text style={styles.colorTxtInfo}> and </Text>
                <TouchableOpacity onPress={() => alert('PP Clicked!')}>
                    <Text style={[styles.colorTxtInfo, {color:'#e88832'}]}>Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={styles.colorTxtInfo}>, by registering.</Text>
            </View>

            <Socialbutton
                buttonTitle="Sign Up With Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => alert('Button FB Clicked!')}
            />

            <Socialbutton
                buttonTitle="Sign Up With Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => alert('Button GGL Clicked!')}
            />

            <TouchableOpacity style={styles.forgotBtn} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.navBtnTxt}>Have An Account? Sign In Now!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    txt:{
        fontFamily: 'NexaBlack',
        fontSize: 18,
        marginBottom: 10,
        color: '#051d5f',
    },
    navBtn:{
        marginTop: 15,
    },
    navBtnTxt:{
        fontSize: 15,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'NexaBlack',
    },
    txtInfo:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
        justifyContent: 'center',
    },
    forgotBtn:{
        marginVertical: 15,
    },
    colorTxtInfo:{
        fontSize:12,
        fontWeight: '400',
        fontFamily: 'Helvetica-Oblique',
        color: 'grey',
    },
})

export default Signupscreen;
