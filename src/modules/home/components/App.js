import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux'


import Splash from './src/modules/splash/containers/splashScreen';
import Login from './src/modules/login/containers/loginScreen';
import Home from './src/modules/home/containers/homeScreen';
import ListNewsScreen from './src/modules/news/containers/listNewsScreen';
import reducers from './src/redux/reducers/AppReducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ createStore( reducers, {} ) } >
        <Router>
          <Stack key="root" >
            <Scene key="login" component={Login} title="Login" hideNavBar />
            <Scene key="home" component={Home} hideNavBar />
            <Scene key="listNewsScreen" component={ListNewsScreen} title="Lista de Notícias" />
            {/* <Scene key="register" component={Splash} title="Splash" /> */}
            {/* <Scene key="register" component={News} title="News" /> */}
          </Stack>
        </Router>
      </Provider>
      );
    }
};
