import React ,{ useState, useEffect } from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,ScrollView,Animated} from 'react-native';
import * as firebase from 'firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageLoad from 'react-native-image-placeholder';
import { StatusBar } from 'react-native';
import { Header,Icon,Badge } from 'react-native-elements';
import { ImageBackground } from 'react-native';
import MyHeader from '../components/MyHeader';


export default class LoginScreenComponent extends React.Component {

    constructor(){
        super();
        this.fadeAnimation = new Animated.Value(0)
        this.state={
          emailId : '',
          password: '',
          homeScreenImage: ''
          
          
        }
      }


    componentDidMount(){
      StatusBar.setHidden(true)
      this.Annimation()
      console.log(window.height)

    }

    Annimation=()=>{
      Animated.timing(this.fadeAnimation, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,      
      }).start()
    }



      login=async(email,password)=>{
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              await AsyncStorage.setItem('isLoggedIn' , 'true')
              this.props.navigation.navigate('HomeScreen')
              
            }
          }
          catch(error){
             
            switch (error.code) {
              case 'auth/user-not-found':
                Alert.alert("user dosen't exists")
                break
              case 'auth/invalid-email':
                Alert.alert('incorrect format email Try using ')
                break
              case 'auth/wrong-password':
                  Alert.alert('Invalid Password')
                  break
            }
          }
        }
        else{
            Alert.alert('enter email and password');
            this.setState(state => ({ visible: !state.visible }))
        }
      }

  render(){
    return(
      <View style={{width:'100%',backgroundColor:'#ffc953',height:'100%'}}>
        <View style={{alignItems:'flex-start',marginLeft:10,marginTop:10}}>
          <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Startup')}}>
              <Image style={{height:40,width:40}} source={require('../assets/angle_left.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={{width:'100%',height:'30%',backgroundColor:'#ffc953'}}>
          <View>
            <Animated.Image style={{width:'70%',marginBottom:50,height:'80%', opacity: this.fadeAnimation }} source={require('../assets/Fixed7.png')}/>
            {/* <Text style={{backgroundColor:'#48b7e1',borderRadius:100,height:'70%',textAlignVertical:'center',width:'50%',color:'grey',fontSize:35,fontWeight:'bold',textAlign:'center',alignSelf:'flex-start',marginBottom:30,marginLeft:30}}>Welcome{'\n'}Back</Text> */}
            {/* <View style={{justifyContent:'flex-end',}}>

            <Text style={{color:'#ffffff',fontSize:22,fontWeight:'bold',alignSelf:'flex-start',marginBottom:30,marginLeft:30}}>Cook ,  Eat , Repeat</Text>

            </View> */}
          </View>

        </View>

        <View style={{backgroundColor:'#4A4A4A',justifyContent:'flex-start',bordeWidth:1,borderRadius:50}}>
          <View style={{justifyContent:'flex-end',height:'100%'}}>
            <ScrollView>
              <View style={{width:'100%'}}>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:75}}>
                  <View>
                    <Icon name = 'envelope' size={35} type = 'font-awesome' color = '#ffffff'/>
                  </View>
                  <TextInput
                    style={styles.loginBoxE}
                    placeholder="Enter Email"
                    keyboardType ='email-address'
                    onChangeText={(text)=>{
                      this.setState({
                        emailId: text
                      })
                    }}
                  />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View>
                    <Icon name = 'unlock-alt' size={40} type = 'font-awesome' color = '#ffffff'/>
                  </View>
                    
                  <TextInput
                    style={styles.loginBoxP}
                    secureTextEntry = {true}
                    placeholder= "Enter Password"
                    onChangeText={(text)=>{
                      this.setState({
                        password: text
                      })
                    }}
                  />
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.forgotButton} onPress={()=>{this.props.navigation.navigate('ForgetPassword')}}>
                  <Text style={{textAlign:'center',color:'white',fontSize:15}}> Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.LoginButton}
                  onPress={()=>{this.login(this.state.emailId ,this.state.password)}}>
                    <Image source={require('../assets/Login.png')} style={styles.Image} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  
  loginBoxE: {
    marginBottom: 10,
    paddingBottom: 15,
    textAlignVertical:'center',
    textAlign: 'center',
    height:'78%',
    borderRadius:20,
    marginRight:5,
    backgroundColor:'rgba(255,255,255,0.75)',
    width:'70%',
  },  
  loginBoxP: {
    marginBottom: 10,
    paddingBottom: 15,
    textAlignVertical:'center',
    textAlign: 'center',
    height:'78%',
    borderRadius:20,
    marginRight:5,
    backgroundColor:'rgba(255,255,255,0.75)',
    width:'70%',
  },
  LoginButton:{
    textAlignVertical:'center',
    marginLeft:30,
    marginTop:30,
    alignSelf:'flex-start'
  },
  forgotButton:{
    textAlignVertical:'center',
    textAlign: 'center',
    marginRight:30,
    alignSelf:'flex-end'
    

  },

  Image:{
    height:75,
    width:75
  }
})


