import React,{ useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { mainStyles, loginStyles } from '@styles/styles';
import TextInput from '@components/TextInput';
import Colors from '@styles/colors';

export default function RegisterScreen({navigation}){

    const [hidePassword, setHidePassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

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
                        keyboardType={null}
                        placeholder='Nombre'
                        image='user'
                    />
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
                <View style={mainStyles.btnTransparent}>
                    <TouchableOpacity>
                        <Text style={[mainStyles.btntxt, {color: Colors.BLUE}]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity 
                        onPress={()=>{navigation.navigate('Login')}}
                    >
                        <Text style={[mainStyles.btntxt]}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}