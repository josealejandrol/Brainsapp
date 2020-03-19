import React,{useEffect} from 'react';
import { SafeAreaView, View, Text, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {splashStyles} from '@styles/styles';
import Colors from '@styles/colors'

export default function SplashScreen({navigation}){

    useEffect(()=> {
        setTimeout(()=>{
            goToScreen('Login')
        }, 2500)
    },[])

    const goToScreen = (routeName) => {
        navigation.navigate(routeName)
    }

    return(
        <SafeAreaView style={splashStyles.image}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
            <Animatable.Image
                animation='pulse'
                easing='ease-out'
                iterationCount='infinite'
                style={{
                    width: 200, 
                    height: 200
                }}
                resizeMode='contain'
                source={require('@assets/SplashScreen/XpectreLabsLogoSinFondo.png')}
            />
            <Text style={{textAlign: 'center', marginTop: 200, fontFamily: 'Poppins-Black', color: Colors.WHITE}}>Welcome Developer!</Text>
        </SafeAreaView>
    )
}