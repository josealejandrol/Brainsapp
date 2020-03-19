import React,{ useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles, loginStyles } from '@styles/styles';
import TextInput from '@components/TextInput';
import Colors from '@styles/colors';

export default function LoginScreen({navigation}){

    const [hidePassword, setHidePassword] = useState(false);

    return(
        <SafeAreaView style={mainStyles.container}>
            <StatusBar backgroundColor={Colors.BLUE} translucent />
            {/* <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}> */}
                <View style={loginStyles.logo}>
                    <Image 
                        source={require('@assets/SplashScreen/XpectreLabsLogoSinFondo.png')} 
                        style={{backgroundColor: Colors.BLACK,width: 200, height: 200}} 
                        resizeMode='contain' 
                    />
                </View>
                    <TextInput
                        keyboardType='email-address'
                        placeholder='E-mail'
                        image='user'
                    />
                    <TextInput
                        keyboardType={null}
                        placeholder='Contraseña'
                        image='lock'
                        bolGone={true}
                        secureTextEntry={hidePassword}
                        onPress={()=> setHidePassword(!hidePassword)} 
                    />
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity>
                        <Text style={[mainStyles.btntxt]}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={mainStyles.btnTransparent}>
                    <TouchableOpacity
                        onPress={()=> {navigation.navigate('Register')}}
                    >
                        <Text style={[mainStyles.btntxt, {color: Colors.BLUE}]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{textDecorationLine: 'underline'}}>Olvide mi Contraseña</Text>
                    </TouchableOpacity>
                </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}