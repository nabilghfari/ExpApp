import React from 'react';
import {View, StyleSheet, Text, Button, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const SkipBtn = ({...props}) => (
    <TouchableOpacity {...props}>
        <Text style={styles.cstmbtn}>Skip Step</Text>
    </TouchableOpacity>
);

const NextBtn = ({...props}) => (
    <TouchableOpacity {...props}>
        <Text style={styles.cstmbtn} >Next</Text>
    </TouchableOpacity>
);

const DoneBtn = ({...props}) => (
    <TouchableOpacity {...props}>
        <Text style={styles.cstmbtn}>Done</Text>
    </TouchableOpacity>
);

const DotsCstm = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(227, 34, 34, 0.8)' : 'rgba(227, 34, 34, 0.3)';
    return(
        <View
            style={{
                width: 7,
                height: 7,
                borderRadius:7/2,
                marginHorizontal:4,
                backgroundColor
            }}
        />
    );

}

const Onboardscreen = ({navigation}) => {
    return (
        <Onboarding
            DotComponent={DotsCstm}
            SkipButtonComponent={SkipBtn}
            NextButtonComponent={NextBtn}
            DoneButtonComponent={DoneBtn}
            onSkip={() => navigation.navigate("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#3ae0d8',
                    image: <Image source={require('../assets/img/image_one.jpg')} style={styles.image}/>,
                    title: 'Onboarding Placeholder 1',
                    subtitle: <Text style={styles.text}>React Native Onboarding Swiper Placeholder One</Text>,
                },
                {
                    backgroundColor: '#3ae0ab',
                    image: <Image source={require('../assets/img/image_two.jpg')} style={styles.image}/>,
                    title: 'Onboarding Placeholder 2',
                    subtitle: <Text style={styles.text}>React Native Onboarding Swiper Placeholder Two</Text>,
                },
                {
                    backgroundColor: '#e0a33a',
                    image: <Image source={require('../assets/img/image_three.jpg')} style={styles.image}/>,
                    title: 'Onboarding Placeholder End',
                    subtitle: <Text style={styles.text}>React Native Onboarding Swiper Placeholder End</Text>,
                },
        ]}
        />
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        height:200,
        width:200,
        borderRadius:100,
    },
    text:{
        color: '#616963',
        fontSize: 15,
    },
    cstmbtn:{
        color: 'black',
        padding: 15,
        fontSize: 16,
    },
})

export default Onboardscreen;
