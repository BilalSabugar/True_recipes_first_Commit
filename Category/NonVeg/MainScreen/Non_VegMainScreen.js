import React , {useState} from 'react';
import { View , Alert , StyleSheet,StatusBar,Text, TouchableOpacity,Image,ScrollView,Dimensions, FlatList} from 'react-native';
import { Card } from 'react-native-paper';
import {AdMobBanner} from 'expo-ads-admob';
import {Icon} from 'react-native-elements'
import { ActivityIndicator } from 'react-native';
import db from './localdb'
import firebase from 'firebase'
import config from '../../../config'
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default class Non_VegMainScreen extends React.Component {

  constructor(){
    super();
    
    this.state={
      data:5,
      page:1,
      isLoading:false,
    }
  }

  WishList =(i)=>{
    const userId = firebase.auth().currentUser.email
    console.log("here in add request");
    config
    .collection('WishList')
    .add({
        "userId" : userId,
        "Title" : i.title,
        "Image" : i.url,
        "navigation" : i.navigation
    })
  }

  componentDidMount(){    
    console.disableYellowBox = true
  }

  fetchMoreData=()=>{
    this.setState({data:this.state.data+5})
  }

  renderView=({item})=>{
    return (
      <View style={{backgroundColor:'#9acd32'}}>
        <View  style={{backgroundColor:'#9acd32',justifyContent:'center',alignItems:'center',marginVertical:25}}>
          <View>
            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
              onPress={()=>{this.props.navigation.navigate(item.navigation)}}>
              <View>
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={item.url} ></Image>
              </View>
                
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:'100%'}}>
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>{item.title}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:'flex-start',marginTop:5,marginLeft:5}} onPress={()=>{ item.wishlistColor='#fc4c4e' , this.WishList(item)}}>
              <Icon type='font-awesome' name='heart' color={item.wishlistColor} size={30}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>      
    );
  }
  render() {
    return(
      <View>
        <FlatList
        
        data={db.slice(0,this.state.update)}
        renderItem={this.renderView}
        keyExtractor={(item,index)=>index.toString()}
        onEndReached={this.fetchMoreData}>

        </FlatList>
      </View>
    )
  
  }
}