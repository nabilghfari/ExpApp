import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity, Image} from 'react-native'
import Forminput from '../components/FormInput';
import Formbutton from '../components/FormButton';
import Socialbutton from '../components/SocialButton';
import LogoReact from '../assets/img/react_fbs.png'
import { AuthContext } from '../navigation/AuthProvider';

const Loginscreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login, googleLogin, facebookLogin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image source={LogoReact} style={styles.logo}/>
            <Text style={styles.txt}>React Exp App</Text>
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
            <Formbutton
                buttonTitle="Sign In"
                onPress={() => login(email, password)}
            />
            <TouchableOpacity style={styles.forgotBtn} onPress={() => alert('Button Forgot Clicked!')}>
                <Text style={styles.navBtnTxt}>Forgot Password?</Text>
            </TouchableOpacity>

            <Socialbutton
                buttonTitle="Sign In With Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => facebookLogin()}
            />

            <Socialbutton
                buttonTitle="Sign In With Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
            />

            <TouchableOpacity style={styles.forgotBtn} onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.navBtnTxt}>Don't Have Any Account? Create One!</Text>
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
    logo:{
        height: 100,
        width: 100,
        resizeMode: 'center',
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
    forgotBtn:{
        marginVertical: 15,
    },
    navBtnTxt:{
        fontSize: 15,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'NexaBlack',
    },
})

export default Loginscreen;
