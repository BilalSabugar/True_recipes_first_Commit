import React from 'react';
import { View , StyleSheet, TouchableOpacity} from 'react-native';
import { Image , Text} from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from 'react-native-paper';
import HomeScreenHeader from '../components/Header/HomeScreenHeader'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


export default class Settings extends React.Component {
  
    render() {
      return (


              
<View style={{height:'100%',width:'100%',backgroundColor:'#4a4a4a'}}>




<View style={{marginTop:20,height:'100%',width:'100%',alignItems:'center'}}>


<TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
  <Icon name='key' type='font-awesome' color='#ffffff'></Icon>
  <Text style={{fontSize:23,fontWeight:'bold',color:'#ffffff'}}>Change Password</Text>
</TouchableOpacity>

</View>
</View>
        
      );
    }
  }

  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 150
    },
    searchBar:{
      flexDirection:'row',
      height:55,
      width:'auto',
      alignItems:'center',
      backgroundColor:'#5597ff',
    },
    modalContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ffff",
      borderWidth:1,
      borderColor:'black',
      width:225
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },

  })
