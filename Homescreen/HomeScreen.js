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


export default class HomeScreen extends React.Component {
  
    render() {
      return (


              
<View style={{height:'100%',width:'100%',backgroundColor:'#4a4a4a'}}>

<HomeScreenHeader navigation ={this.props.navigation}/>









  
  <View style={{marginTop:50,alignItems:'center',width:'100%',height:'100%'}}>


<View style={{height:'40%',width:'85%',borderRadius:20}}>


    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Category')}}>

      <Card style={{backgroundColor:'rgba(255,255,255,0.25)',height:'100%',width:'100%',alignSelf:'center',borderRadius:20}}>



        <View style={{justifyContent:'center',height:'100%'}}>
              {/* <Image style={{borderRadius:17.5,height:'60%',width:'90%',alignSelf:'center'}} source={require('../assets/Square_Category_Icon.png')}></Image> */}
                <Icon type='font-awesome' name='cutlery' size={50} color='#ffffff'></Icon>
                <Text style={{fontSize:50,color:'#ffffff',fontWeight:'bold',alignSelf:'center'}}>Category</Text>
        </View>



      </Card>
  
    </TouchableOpacity>


    {/* height:'100%',width:'100%' */}
    {/* <TouchableOpacity style={{alignSelf:'center',height:'100%'}} onPress={()=>{this.props.navigation.navigate('Favourite')}}>
      <Image style={{borderRadius:17.5,height:'40%',width:128}} source={require('../assets/Square_Favourite_Icon.png')}></Image>
    </TouchableOpacity> */}


</View>

{/* <AdMobBanner
  bannerSize="banner"
  adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
  onDidFailToReceiveAdWithError={this.bannerError}
  style={{justifyContent:'flex-end',height:'45%'}} /> */}

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
