import React from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles/login.style';

export default class Login extends React.Component{

    render(){
    return( 
      <ImageBackground
        source={ require('centup3/src/assets/imgs/bg-fundo.jpeg' )}
        style={ styles.bgImg }>
        <View style={ styles.containerTop } >
          <Image source={ require('centup3/src/assets/imgs/logo.png')}
                 style={ styles.logoImg } />
          <Text
            style={ styles.textInit }>
              Welcome Back! We've missed you
          </Text>
        </View>
        <View style={ styles.containerFields } >
          <TextInput
            style={ styles.textFields }
            placeholder='Email'
            keyboardType='email-address'
            placeholderTextColor='gray'
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={ styles.textFields }
            placeholder='Password'
            secureTextEntry={ true }
            keyboardType='email-address'
            placeholderTextColor='gray'
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={ styles.containerBtns } >
          <TouchableHighlight
            onPress={ () => { return null } }
            style={ styles.btnLogin }>
              <Text style={ styles.btnText }>Login</Text>
          </TouchableHighlight>
          <View style={ styles.containerLinks } >
          <TouchableHighlight
            onPress={ () => { return null } }
            underlayColor='transparent'  >
            <Text >Login with Facebook</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={ () => { return null } }
            underlayColor='transparent' >
            <Text style={ styles.textBold }>Forgot Password?</Text>
          </TouchableHighlight>
          </View>
        </View>


      </ImageBackground>
    )
  }
}