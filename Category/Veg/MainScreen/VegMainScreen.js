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

export default class VegMainScreen extends React.Component {

  constructor(){
    super();
    
    this.state={
      data:[],
      page:1,
      isLoading:false,
      update:5,
      Image:[],
      Title:[],
      navigation:[],
      color:'white'
    }
  }

  WishList =()=>{
    const userId = firebase.auth().currentUser.email
    console.log("here in add request");
    config
    .collection('WishList')
    .add({
        "userId" : userId,
        "Title" : this.state.Title,
        "Image" : this.state.Image,
        "navigation" : this.state.navigation

    })


    // this.setState({
    //     requestId: randomRequestId
    // })

    return console.log(this.state.Title,this.state.Image)


  }

 

  componentDidMount(){    
    console.disableYellowBox = true
  }

  fetchMoreData=()=>{

    const update = this.state.update
    this.setState({update:update+5})
    console.log(this.state.update)

  }


  
 
  renderView=({item})=>{
    const apiUrl = item.url;


    return (
      

      <View style={{backgroundColor:'#9acd32'}}>
        <View  style={{backgroundColor:'#9acd32',justifyContent:'center',alignItems:'center',marginVertical:25}}>
          <View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
              onPress={()=>{this.props.navigation.navigate(item.navigation)}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={apiUrl} ></Image>
              
              </View>
                
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:'100%'}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>{item.title}</Text>

              </View>

            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:'flex-start',marginTop:5,marginLeft:5}} onPress={()=>{this.setState({ Title:item.title , Image:item.url , navigation:item.navigation }) ,item.wishlistColor='red', this.WishList() }}>
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
            onEndReached={this.fetchMoreData}
            
            // ListFooterComponent={this.loading}
            
            >

            </FlatList>
          </View>
        )
      
      }
    }