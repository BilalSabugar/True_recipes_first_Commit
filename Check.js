import React from 'react'
import {View,Text} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';

export default class Check extends React.Component {
    constructor(){
      super();
      this.state={
        snackIsVisible:false,
        textMessage:'',
        distance:'',
        isReady:false
      }
    }
    async componentDidMount(){
      StatusBar.setHidden(true);
      const isLoggedIn=await AsyncStorage.getItem('isLoggedIn')
    if(isLoggedIn=="true"){
      this.props.navigation.navigate("HomeScreen")}
      else{
        
        this.props.navigation.navigate("Startup")}
      }
      render(){
      return(
        <View style={{flex:1,justifyContent:'center'}}>
          <View>
<Text style={{alignSelf:'center',fontSize:16}}>Redirecting to home screen if already logged in.</Text>
          </View>
          </View>
      )
      }
  }