import * as  React from 'react';
import {View,TouchableOpacity,Button,Text,StyleSheet,Image,Dimensions} from 'react-native';
import { StatusBar } from 'react-native';
import StartupImage from './StartupImage'



export default class Startup extends React.Component {


    async componentDidMount(){
        StatusBar.setHidden(true);
        }
    

    render(){
        return(

            <View style={{width:'100%',height:'100%',backgroundColor:'#4a4a4a'}}>
<View style={{flex:1,backgroundColor:'Black'}}>
    
<StartupImage/>

</View>
    

    <View style={{flex:1}}></View>
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'bababa'}}>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={{marginBottom:10,alignItems: 'center',justifyContent: 'center',backgroundColor:'white',borderRadius:25,height:50,width:'75%'}}>

                    <Text style={{color:'#4A4A4A',fontSize:20,fontWeight:'bold',fontStyle:"italic"}}>Login</Text>

                </TouchableOpacity>



                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')} style={{marginBottom:30,marginTop:5,alignItems: 'center',justifyContent: 'center',backgroundColor:'white',borderRadius:25,height:50,width:'75%'}}>

                    <Text style={{color:'#4A4A4A',fontSize:20,fontWeight:'bold',fontStyle:"italic"}}>Signup</Text>

                </TouchableOpacity>
               
                </View>
            </View>

        );
    }

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });