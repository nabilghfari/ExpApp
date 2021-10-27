import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Loginscreen from '../pages/LoginScreen';
import Onboardscreen from '../pages/OnboardScreen';
import Signupscreen from '../pages/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const AppStack = createNativeStackNavigator();

const AuthStack = () => {
  const [firstLaunch, setFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('abcdefG').then(value => {
      if (value == null){
        AsyncStorage.setItem('abcdefG', 'true');
        setFirstLaunch(true);
      }
      else{
        setFirstLaunch(false);
      }
    });

    GoogleSignin.configure({
      webClientId: '185858239341-o1nmvqkhg8kbmiv4qhfgcl1vrnnmtsqm.apps.googleusercontent.com',
    });

  }, []);

  if (firstLaunch == null){
    return null
  }
  else if (firstLaunch == true){
    routeName = "Onboarding";
  }
  else{
    routeName = "Login";
  }

  return(
    <AppStack.Navigator initialRouteName={routeName}>
      <AppStack.Screen name="Onboarding" component={Onboardscreen} options={{header: () => null}}/>
      <AppStack.Screen name="Login" component={Loginscreen} options={{header: () => null}}/>
      <AppStack.Screen 
          name="Signup"
          component={Signupscreen}
          //options={{header: () => null}}
          options={() => ({
            title: '',
            headerStyle: {
              elevation: 0,
              borderBottomWidth: 0,
              backgroundColor: '#f9fafd',
            },
            
          })}
          />
    </AppStack.Navigator>
  );

}

const styles = StyleSheet.create({})

export default AuthStack;
