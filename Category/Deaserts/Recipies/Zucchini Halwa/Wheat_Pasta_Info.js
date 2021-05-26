import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View , Text, ScrollView , Dimensions } from 'react-native';



export default class Aloo_Tamatar_Ka_Jhol_Info extends React.Component {

  constructor(){
    super();

    this.state={
      Favourite:'Working',
      // userId : firebase.auth().currentUser.email,
      bookName:"",
      reasonToRequest:"",
      IsBookRequestActive : "",
      requestedBookName: "",
      bookStatus:"",
      requestId:"",
      userDocId: '',
      docId :''

    }
  }


  // createUniqueId(){
  //   return Math.random().toString(36).substring(7);
  // }

  // addRequest =()=>{
  //   var userId = this.state.userId
  //   var randomRequestId = this.createUniqueId()


  //   console.log(this.state.Favourite)
  //   console.log(randomRequestId)
  //   console.log(userId)


  //   config.collection('users').doc("hello").add({
  //       "recipie": this.state.Favourite,
  //       "request_id"  : randomRequestId,
  //       "user_id": userId,

  //   })
    
  


  //   return Alert.alert("Book Requested Successfully")


  // }


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
    Total Cook Time: 35 minutes
    </Text>  

    <Text style={{justifyContent:'flex-start',fontSize:22,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>
    Recipe Servings: 2
    </Text>  

    <Text style={{justifyContent:'flex-start',fontSize:22,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>
    Cook Time: 25 minutes
    </Text>  

    <Text style={{justifyContent:'flex-start',fontSize:22,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>
    Difficulty Level: Medium
    </Text>  





  </View>





</ScrollView>




  <View style={{flexDirection:'row',justifyContent:'space-between'}}>

        <TouchableOpacity style={{flexDirection:'row',marginBottom:20}} onPress={()=>{this.props.navigation.goBack()}}>

          <Image style={{backgroundColor:'#ffffff',borderRadius:100,width:40,height:40,marginLeft:15}} source={require('../../../../assets/All-Icons/previous.png')}></Image>

          <Text style={{color:'#ffffff',alignSelf:'center',fontSize:25,fontWeight:'bold',marginLeft:15}} >Previous</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginBottom:20}} onPress={()=>{this.props.navigation.navigate('Wheat_Pasta_Step_1')}}>

          <Text style={{color:'#ffffff',alignSelf:'center',fontSize:25,fontWeight:'bold',marginRight:15}} >Next</Text>

          <Image style={{backgroundColor:'#ffffff',borderRadius:100,width:40,height:40,marginRight:15}} source={require('../../../../assets/All-Icons/Next.png')}></Image>

        </TouchableOpacity>


  </View>





</View>
        

        
      );
    }
  }

  
