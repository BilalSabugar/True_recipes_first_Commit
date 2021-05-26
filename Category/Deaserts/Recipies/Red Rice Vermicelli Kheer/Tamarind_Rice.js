import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View , Text, ScrollView , Dimensions } from 'react-native';



export default class Tamarind_Rice extends React.Component {

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
Ingredients Of Tamarind Rice
</Text>

<View style={{borderBottomWidth:1,borderBottomColor:'grey',width:'95%',alignSelf:'center'}}>
</View>



<ScrollView style={{height:'80%'}}>

  

<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'800',marginLeft:15,marginTop:20}}>
1{' '+').'}  2 Cups rice (cooked 'bite-like').{'\n'}
{'\n'}
2{' '+').'}  1/2 cup tamarind (made into pulp).{'\n'}
{'\n'}
3{' '+').'}  3 Whole red chillies.{'\n'}
{'\n'}
4{' '+').'}  1/4 cup curry leaves.{'\n'}
{'\n'}
5{' '+').'}  A pinch of asafoetida.{'\n'}
{'\n'}
6{' '+').'}  1 tsp mustard seeds.{'\n'}
{'\n'}
7{' '+').'}  1 tbsp chana dal.{'\n'}
{'\n'}
8{' '+').'}  1 tsp urad dal (dhuli).{'\n'}
{'\n'}
9{' '+').'}  1/4 tsp methi seeds.{'\n'}
{'\n'}
10{' '+').'} 1/2 tsp red chillli powder.{'\n'}
{'\n'}
11{' '+').'} 1 tbsp peanuts.{'\n'}
{'\n'}
12{' '+').'} 1 tsp salt.{'\n'}
{'\n'}
13{' '+').'} 1/4 tsp turmeric powder.{'\n'}
{'\n'}
14{' '+').'} 1/4 tsp gur.{'\n'}
{'\n'}
15{' '+').'}  Oil.{'\n'}
{'\n'}
</Text>







</ScrollView>

<TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',marginBottom:20}} onPress={()=>{this.props.navigation.navigate('Tamarind_Rice_Info')}}>

<Text style={{color:'#ffffff',alignSelf:'center',fontSize:30,fontWeight:'bold',marginRight:25}} >Next</Text>

<Image style={{backgroundColor:'#ffffff',borderRadius:100,width:75,height:75,marginRight:20}} source={require('../../../../assets/All-Icons/Next.png')}></Image>

</TouchableOpacity>




</View>
        

        
      );
    }
  }

  
