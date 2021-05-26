import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Alert} from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import firebase from 'firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';
import { Dimensions } from 'react-native';

export default class CustomSideBarMenu extends Component{

    render(){
        return(
            <View style = {{flex:1,backgroundColor:'#4a4a4a',color:'#ffffff',height:'100%'}}>
                <View style = {styles.drawerItemsContainer}>

                  <Text style = {{color:'#ffffff',fontSize:33,fontWeight:'bold',borderBottomColor:"grey",borderBottomWidth:1,margin:20}}>True Recipies</Text>

                  <View style = {{flexDirection:'column',marginRight:20,marginLeft:20,marginBottom:20,justifyContent:'space-evenly',height:'20%'}}>






                  <View style={{flexDirection:'row',borderBottomColor:"grey",borderBottomWidth:1,alignItems:'center',marginTop:75,marginBottom:50}}>



  <TouchableOpacity
    style = {styles.Button}
    onPress={()=>{this.props.navigation.navigate('HomeScreen'),this.props.navigation.closeDrawer()}
    }>
                <Icon style={{alignSelf:'center'}} name = 'home' type = 'font-awesome' color = '#ffffff'></Icon>
        <Text style={{color:'#ffffff',fontSize:20,fontWeight:'bold',marginLeft:25}}>Homescreen</Text>

  </TouchableOpacity>
</View>






                    <View style={{marginTop:50,marginBottom:50}}>

                    

                      <TouchableOpacity
                        style = {styles.Button}
                        onPress={()=>{this.props.navigation.closeDrawer(),this.props.navigation.navigate('Category')}
                        }>
                          <Icon style={{alignSelf:'center'}} name = 'list' type = 'font-awesome' color = '#ffffff'></Icon>
                            <Text style={{color:'#ffffff',fontSize:20,fontWeight:'bold',marginLeft:25}}>Category</Text>
                            
                      </TouchableOpacity>
                    </View>


                    <View style={{marginTop:50}}>

                    

                      <TouchableOpacity
                        style = {styles.BigButton}
                        onPress={()=>{this.props.navigation.closeDrawer(),this.props.navigation.navigate('Category')}
                        }>
                          <Icon style={{alignSelf:'center'}} name = 'info-circle' type = 'font-awesome' color = '#ffffff'></Icon>
                            <Text style={{color:'#ffffff',fontSize:20,fontWeight:'bold',marginLeft:25}}>About Premium Version</Text>
                            
                      </TouchableOpacity>
                    </View>





                    {/* <View style={{flexDirection:'row',borderBottomColor:"grey",borderBottomWidth:1,alignItems:'center',marginTop:15}}>

                    <Icon style={{alignSelf:'center'}} name = 'heart' type = 'font-awesome' color = '#ffffff' onPress = {()=>{this.props.navigation.navigate("Favourite"),this.props.navigation.closeDrawer()}}></Icon>

                      <TouchableOpacity
                        style = {styles.Button}
                        onPress={()=>{this.props.navigation.navigate('Favourite'),this.props.navigation.closeDrawer()}
                        }>
                            <Text style={{color:'#ffffff',fontSize:20,fontWeight:'bold'}}>Favoutite</Text>
                            
                      </TouchableOpacity>
                    </View> */}





                    {/* <View style={{flexDirection:'row',borderBottomColor:"grey",borderBottomWidth:1,alignItems:'center'}}>

                    <Icon style={{alignSelf:'center'}} name = 'cog' type = 'font-awesome' color = '#ffffff' onPress = {()=>{this.props.navigation.closeDrawer(),this.props.navigation.navigate("Settings")}}></Icon>

                      <TouchableOpacity
                        style = {styles.Button}
                        onPress={()=>{this.props.navigation.navigate('Settings')}
                        }>
                            <Text style={{color:'#ffffff',fontSize:20,fontWeight:'bold'}}>Settings</Text>
                            
                      </TouchableOpacity>
                    </View> */}



                  </View>


                </View>


                

                  <View style={{height:100,justifyContent:'flex-end'}}>

                
                    <TouchableOpacity
                    style = {styles.logOut}
                    onPress={
                        async()=>{
                            await AsyncStorage.setItem('isLoggedIn','null')
                            this.props.navigation.navigate('Startup')
                            firebase.auth().signOut();
                        }
                    }>

                      <View style = {styles.logOut}>

                        <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                      
                      <Icon name = 'sign-out' type = 'font-awesome' color = '#ffffff'></Icon>
                        <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:15,marginLeft:13}}>Logout</Text>
                        
                        
                        </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:1,
      tintColor:'#ffffff',
      height:'100%',
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:25
    },
    Button : {
      height:50,
      width:'100%',
      justifyContent:'space-evenly',
      padding:10,
      paddingLeft:25,
      flexDirection:'row',borderBottomColor:"grey",borderBottomWidth:1,alignItems:'center',justifyContent:'flex-start'
      
    },
    BigButton : {
      height:75,
      width:'100%',
      justifyContent:'space-evenly',
      padding:10,
      paddingLeft:25,
      flexDirection:'row',borderBottomColor:"grey",borderBottomWidth:1,alignItems:'center',justifyContent:'flex-start'
      
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold',
    },
    logOut : {
      // height:'50%',
      width:'100%',
      alignItems:'flex-start',
      justifyContent:'flex-end',
      margin:15
    },
  })