import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View , Text, ScrollView , Dimensions } from 'react-native';



export default class Tamarind_Rice_Info extends React.Component {







    render() {
      return (

        <View  style={{backgroundColor:'#9acd32',height:'100%',width:'100%',flexDirection:'column'}}>



<Text style={{justifyContent:'flex-start',fontSize:40,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20,marginBottom:10}}>
Information
</Text>

<View style={{borderBottomWidth:1,borderBottomColor:'grey',width:'95%',alignSelf:'center'}}>
</View>



<ScrollView style={{height:'80%'}}>


  <View style={{flexDirection:'column'}}>



    <Text style={{justifyContent:'flex-start',fontSize:22,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>
    Preparation Time : 10 Minutes
    </Text>  

    <Text style={{justifyContent:'flex-start',fontSize:22,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>
    Total Cook Time: 40 mins
    </Text>  

    <Text style={{justifyContent:'flex-start',fontSize:22,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>
    Recipe Servings: 2
    </Text>  

    <Text style={{justifyContent:'flex-start',fontSize:22,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>
    Cook Time: 30 Minutes
    </Text>  

    <Text style={{justifyContent:'flex-start',fontSize:22,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>
    Difficulty Level: Easy
    </Text>  





  </View>





</ScrollView>




  <View style={{flexDirection:'row',justifyContent:'space-between'}}>

        <TouchableOpacity style={{flexDirection:'row',marginBottom:20}} onPress={()=>{this.props.navigation.goBack()}}>

          <Image style={{backgroundColor:'#ffffff',borderRadius:100,width:40,height:40,marginLeft:15}} source={require('../../../../assets/All-Icons/previous.png')}></Image>

          <Text style={{color:'#ffffff',alignSelf:'center',fontSize:25,fontWeight:'bold',marginLeft:15}} >Previous</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginBottom:20}} onPress={()=>{this.props.navigation.navigate('Tamarind_Rice_Step_1')}}>

          <Text style={{color:'#ffffff',alignSelf:'center',fontSize:25,fontWeight:'bold',marginRight:15}} >Next</Text>

          <Image style={{backgroundColor:'#ffffff',borderRadius:100,width:40,height:40,marginRight:15}} source={require('../../../../assets/All-Icons/Next.png')}></Image>

        </TouchableOpacity>


  </View>





</View>
        

        
      );
    }
  }

  
