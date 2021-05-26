import * as  React from 'react';
import {View,TouchableOpacity,Button,Text,StyleSheet,Image,Dimensions} from 'react-native';
import { StatusBar } from 'react-native';



export default class Startup extends React.Component {


    async componentDidMount(){
        StatusBar.setHidden(true);
        }
    

    render(){
        return(

            <View style={{width:'100%',height:'100%',backgroundColor:'#4a4a4a'}}>
<View style={{backgroundColor:'Black'}}>
    
<Image style={{backgroundColor:'black',width:Dimensions.get("screen").width,height:Dimensions.get("screen").height}} source={require('../assets/try.png')}></Image>
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