import React , {useState} from 'react';
import { View , Alert , StyleSheet,StatusBar,Text, TouchableOpacity,Image,ScrollView,Dimensions, FlatList} from 'react-native';
import { Card } from 'react-native-paper';
import {AdMobBanner} from 'expo-ads-admob';
import {Icon} from 'react-native-elements'
import { ActivityIndicator } from 'react-native';
import db from './localdb'

export default class VegMainScreen extends React.Component {

  constructor(){
    super();
    
    this.state={
      data:[],
      page:1,
      isLoading:false,
      update:5
    }
  }

 

  componentDidMount(){    
    // fetch(apiUrl).then(res=>res.json())
    // .then(resjson=>{
    //     this.setState({data : resjson})
    // })
    
  }

  fetchMoreData=()=>{

    const update = this.state.update
    this.setState({update:update+5})
    console.log(this.state.update)

  }


  
 
  renderView=({item})=>{
    const apiUrl = item.url

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

    
