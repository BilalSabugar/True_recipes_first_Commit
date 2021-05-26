import React , {useState} from 'react';
import {View,StyleSheet,Image,Text,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView, ScrollView,Animated} from 'react-native';
import firebase from 'firebase'
import { Icon } from 'react-native-elements';
import config from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { ImagePicker } from 'expo-image-picker';



export default class Signup extends React.Component {

  


    constructor(){
        super();
        this.fadeAnimation = new Animated.Value(0)
        this.state={
          emailId : '',
          password: '',
          confirmPassword:'',
          // userEmail: ,
          




          // HomeScreenViewsId1:0,
          // HomeScreenViewsId2:0,
          // HomeScreenViewsId3:0,
          // HomeScreenViewsId4:0,
          // HomeScreenViewsId5:0,
          // HomeScreenViewsId6:0,
          // HomeScreenViewsId7:0,
          // HomeScreenViewsId8:0,
          // HomeScreenViewsId9:0,
          // HomeScreenViewsId10:0,

          fadeAnim: new Animated.Value(0)
        }
      }






      Annimation=()=>{
        Animated.timing(this.fadeAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,      
        }).start()
      }
      componentDidMount(){
        this.Annimation()
      }
    
      userSignUp=async(emailId,password,confirmPassword)=>{
        if(password !== confirmPassword){
          return Alert.alert("password doesn't match\nCheck your password.")
      }else{
        const response =  firebase.auth().createUserWithEmailAndPassword(emailId, password)     
        .then(()=>{
           config.collection('Favourite').add({
              email_id: firebase.auth().currentUser.email


          //   HomeScreenViewsId1:this.state.HomeScreenViewsId1,
          //   HomeScreenViewsId2:this.state.HomeScreenViewsId2,
          //   HomeScreenViewsId3:this.state.HomeScreenViewsId3,
          //   HomeScreenViewsId4:this.state.HomeScreenViewsId4,
          //   HomeScreenViewsId5:this.state.HomeScreenViewsId5,
          //   HomeScreenViewsId6:this.state.HomeScreenViewsId6,
          //   HomeScreenViewsId7:this.state.HomeScreenViewsId7,
          //   HomeScreenViewsId8:this.state.HomeScreenViewsId8,
          //   HomeScreenViewsId9:this.state.HomeScreenViewsId9,
          //   HomeScreenViewsId10:this.state.HomeScreenViewsId10,
          
          })

          if (response){
            AsyncStorage.setItem('isLoggedIn' , 'true')
            this.props.navigation.navigate('HomeScreen')
            } 
          
        }).
        catch((error)=>{
          switch (error.code) {
            case 'auth/user-not-found':
              Alert.alert("user dosen't exists")
              break
            case 'auth/invalid-email':
              Alert.alert('incorrect format email')
              break
            case 'auth/wrong-password':
                Alert.alert('Invalid Password')
                break
            case 'auth/email-already-in-use':
                  Alert.alert('Email already in use.\nTry using dfferent email')
                  break
            case 'auth/invalid-password':
                    Alert.alert('incorrect format password')
                  break

              
          }
        })
        
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


<View
            
            style={{width:'98%',height:'28%',backgroundColor:'#ffc953'}}>


{/* <View style={{flexDirection:'row',height:'100%',width:'80%'}}> */}
<View style={{alignItems:'center',width:'100%',justifyContent:'center'}}>
<Animated.Image style={{width:'100%',height:'100%', opacity: this.fadeAnimation }} source={require('../assets/Fix1.png')}/>
</View>

{/* <View style={{jalignItems:'flex-end',width:'5%'}}>
  <Image style={{width:50,marginBottom:10,height:50}} source={require('../assets/FullCreateAccount.png')}></Image>
</View> */}





{/* </View> */}
</View>



        <View style={{backgroundColor:'#4A4A4A',justifyContent:'flex-start',bordeWidth:1,borderRadius:50}}>



        <View style={{justifyContent:'flex-end',height:'100%'}}>
          
        
        <ScrollView>
          
        <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20,flex:1}}>
        <View>
          
        </View>
        <View style={{flex:1,width:'100%'}}>
















        <View style={{width:Dimensions.get('screen').width,alignItems:'flex-end'}}>

          <View style={{marginRight:50,marginTop:25,flexDirection:'row',alignItems:'center'}}>


              {/* <Text style={{marginRight:15,fontSize:20,color:'white',fontWeight:'bold'}}>Add Avatar</Text>

<Avatar
  // style={{marginRight:1}}
  size="medium"
  rounded
  source={require('../assets/Avatar.jpg')}
  // title="This.state.DefaultAvatar"
  onPress={() =>{ ImagePicker.launchImageLibraryAsync(); }}
/> */}

</View>

</View>







          
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}>

<View>
<Icon name = 'envelope' size={35} type = 'font-awesome' color = '#ffffff'/>
</View>

        <TextInput
          style={styles.loginBoxE}
          placeholder="Enter New Email"
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
          placeholder="Enter New Password"
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password: text
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
          placeholder ={"Confrim Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        />

</View>




        </View>
        <TouchableOpacity style={styles.LoginButton}
                          onPress={()=>{this.userSignUp(this.state.emailId ,this.state.password,this.state.confirmPassword)}}>
          
                              <Image
                                source={require('../assets/Login.png')}
                                style={styles.Image}
                              />
          
                          </TouchableOpacity>
      </KeyboardAvoidingView>
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
  SignUpButton:{
    marginVertical: 10,
    textAlignVertical:'center',
    textAlign: 'center',
    height:48,
    borderRadius:20,
    marginHorizontal:16,
    elevation:10,
    backgroundColor:'#57b847',
    width:150,
    justifyContent:'center',
    alignItems:'center'
  },
  Image:{
    height:75,
    width:75
  },
  LoginButton:{
    textAlignVertical:'center',
    marginLeft:30,
    marginTop:30,
    alignSelf:'flex-start'
  },
})