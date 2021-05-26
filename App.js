import React from 'react';
import { StyleSheet, Text, View,Image,StatusBar } from 'react-native';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Check from './Check';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen'
import Signup from './screens/Signup'
import * as SplashScreen from 'expo-splash-screen';
import Startup from './screens/Startup'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { Card } from 'react-native-paper';


export default class App extends React.Component {

  
  componentDidMount(){
    StatusBar.setHidden(true);
  }

  render(){
    return (
      <AppContainer/>
    );
  }
}



const switchNavigator = createAnimatedSwitchNavigator({
  Check : {screen:Check},
  Startup:{screen: Startup},
  Drawer : {screen:AppDrawerNavigator},
  Login : {screen: LoginScreen},
  Signup : {screen: Signup},
},
{
  transition: (
    <Transition.Together>
      <Transition.Out
        type="slide-left"
        durationMs={400}
        interpolation="easeIn"
      />
      <Transition.In type="slide-right" durationMs={400} interpolation="easeIn"/>
    </Transition.Together>
  ),
}
);


const AppContainer =  createAppContainer(switchNavigator);