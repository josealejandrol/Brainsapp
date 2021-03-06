import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

const Stack = createStackNavigator();

//Screens
import HomeScreen from '@screens/Home';
import SplashScreen from '@screens/SplashScreen';
import LoginScreen from '@screens/LoginScreen';

function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={SplashScreen} options={{title: 'SplashScreen', headerShown: false}} />
                <Stack.Screen name='Login' component={LoginScreen} options={{title: 'LoginScreen', headerShown: false}} />
                <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Inicio'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;