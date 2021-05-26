import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View , Text, ScrollView , Dimensions } from 'react-native';



export default class Wheat_Pasta_in_Mushroom_Sauce extends React.Component {

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

<TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
            <Image style={{alignSelf:'flex-start',height:50,width:50,marginLeft:15,marginTop:15}} source={require('../../../../assets/All-Icons/back1.png')}></Image>
          </TouchableOpacity>


<Text style={{justifyContent:'flex-start',fontSize:25,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20,marginBottom:10}}>
Ingredients Of Whole Wheat Pasta In Mushroom Sauce
</Text>

<View style={{borderBottomWidth:1,borderBottomColor:'grey',width:'95%',alignSelf:'center'}}>
</View>



<ScrollView style={{height:'80%'}}>

<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'800',marginLeft:15,marginTop:20}}>
1.  50 Gram shitake mushroom (soaked in warm water for 15 minutes).{'\n'}
{'\n'}
2.  100 gram fresh mushroom-sliced.{'\n'}
{'\n'}
3.  1 tbsp onion, chopped.{'\n'}
{'\n'}
4.  1 garlic clove.{'\n'}
{'\n'}
5.  1 tbsp fresh thyme or fresh parsley, chopped.{'\n'}
{'\n'}
6.  30 ml white Wine.{'\n'}
{'\n'}
7.  100 gram whole wheat pasta-penne or linguine.{'\n'}
{'\n'}
8.  For seasoning salt and pepper.{'\n'}
</Text>





</ScrollView>

<TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',marginBottom:20}} onPress={()=>{this.props.navigation.navigate('Wheat_Pasta_Info')}}>

<Text style={{color:'#ffffff',alignSelf:'center',fontSize:30,fontWeight:'bold',marginRight:25}} >Next</Text>

<Image style={{backgroundColor:'#ffffff',borderRadius:100,width:75,height:75,marginRight:20}} source={require('../../../../assets/All-Icons/Next.png')}></Image>

</TouchableOpacity>




</View>
        

        
      );
    }
  }

  
