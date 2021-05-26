import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View , Text, ScrollView , Dimensions } from 'react-native';



export default class Aloo_Tamatar_Ka_Jhol extends React.Component {

 

    render() {
      return (

        <View  style={{backgroundColor:'#9acd32',height:'100%',width:'100%',flexDirection:'column'}}>

          <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
          <Image style={{alignSelf:'flex-start',height:50,width:50,marginLeft:15,marginTop:15}} source={require('../../../../assets/All-Icons/back1.png')}></Image>
          </TouchableOpacity>


<Text style={{justifyContent:'flex-start',fontSize:25,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20,marginBottom:10}}>
Ingredients Of Aloo Tamatar Ka Jhol
</Text>

<View style={{borderBottomWidth:1,borderBottomColor:'grey',width:'95%',alignSelf:'center'}}>
</View>

<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>For the gravy:</Text>

<ScrollView style={{height:'80%'}}>

  

<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'800',marginLeft:15,marginTop:20}}>
1{' '+').'}  2 potatoes, parboiled.{'\n'}
{'\n'}
2{' '+').'}  250 gm paneer.{'\n'}
{'\n'}
3{' '+').'}  1+1 tsp turmeric.{'\n'}
{'\n'}
4{' '+').'}  Salt, to taste.{'\n'}
{'\n'}
5{' '+').'}  1+1 tsp red chilli powder.{'\n'}
{'\n'}
6{' '+').'}  1-2 tsp Oil.{'\n'}
{'\n'}
7{' '+').'}  Oil to flash fry (Flash fry is a process in which the potatoes/paneer are immersed in hot oil{'\n'} and fried for 3-4 minutes or till colored on the outside.).{'\n'}
{'\n'}
8{' '+').'}  1 black cardamom.{'\n'}

{'\n'}

9{' '+').'}  Oil.{'\n'}
{'\n'}
10{' '+').'}  3 green cardamom.{'\n'}
{'\n'}
11{' '+').'}  1 stick cinnamon.{'\n'}
{'\n'}
12{' '+').'}  3 cloves.{'\n'}
{'\n'}
13{' '+').'}  1 tsp cumin seeds.{'\n'}
{'\n'}
14{' '+').'}  1 onion, finely chopped.{'\n'}
{'\n'}
15{' '+').'}  2 tsp ginger, chopped.{'\n'}
{'\n'}
16{' '+').'}  2-3 cloves garlic, crushed.{'\n'}

{'\n'}

17{' '+').'}  1 Tbsp butter.{'\n'}
{'\n'}
18{' '+').'}  1 tsp turmeric.{'\n'}
{'\n'}
19{' '+').'}  1 tsp cumin.{'\n'}
{'\n'}
20{' '+').'}  1 tsp coriander powder.{'\n'}
{'\n'}
21{' '+').'}  Hing, a pinch.{'\n'}
{'\n'}
22{' '+').'}  Water.{'\n'}
{'\n'}
23{' '+').'}  2-3 tomatoes, chopped.{'\n'}
{'\n'}
24{' '+').'}  Garnish with chopped mint leaves.{'\n'}
</Text>







</ScrollView>

<TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',marginBottom:20}} onPress={()=>{this.props.navigation.navigate('Aloo_Tamatar_Ka_Jhol_Info')}}>

<Text style={{color:'#ffffff',alignSelf:'center',fontSize:30,fontWeight:'bold',marginRight:25}} >Next</Text>

<Image style={{backgroundColor:'#ffffff',borderRadius:100,width:75,height:75,marginRight:20}} source={require('../../../../assets/All-Icons/Next.png')}></Image>

</TouchableOpacity>




</View>
        

        
      );
    }
  }

  
