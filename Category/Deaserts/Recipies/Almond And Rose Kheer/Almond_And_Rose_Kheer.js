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
Ingredients Of Butter Paneer
</Text>

<View style={{borderBottomWidth:1,borderBottomColor:'grey',width:'95%',alignSelf:'center'}}>
</View>

<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>For the gravy:</Text>

<ScrollView style={{height:'80%'}}>

  

<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'800',marginLeft:15,marginTop:20}}>
1{' '+').'}  250 gms paneer (cut into rectangles).{'\n'}
{'\n'}
2{' '+').'}  6 tomatoes, chopped.{'\n'}
{'\n'}
3{' '+').'}  15 Kaju (cashew nuts).{'\n'}
{'\n'}
4{' '+').'}  5 Garlic cloves (crushed).{'\n'}
{'\n'}
5{' '+').'}  2 tbsp butter.{'\n'}
{'\n'}
6{' '+').'}  to taste salt.{'\n'}
{'\n'}
7{' '+').'}  to taste red chili powder.{'\n'}
{'\n'}
8{' '+').'}  2 tbsp kasoori methi (fenugreek leaves).{'\n'}

{'\n'}

9{' '+').'}  1 tsp sugar.{'\n'}
{'\n'}
10{' '+').'}  Cream (optional).{'\n'}
{'\n'}
11{' '+').'}  2-3 tbsp milk.{'\n'}
{'\n'}

</Text>







</ScrollView>

<TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',marginBottom:20}} onPress={()=>{this.props.navigation.navigate('Butter_Paneer_Info')}}>

<Text style={{color:'#ffffff',alignSelf:'center',fontSize:30,fontWeight:'bold',marginRight:25}} >Next</Text>

<Image style={{backgroundColor:'#ffffff',borderRadius:100,width:75,height:75,marginRight:20}} source={require('../../../../assets/All-Icons/Next.png')}></Image>

</TouchableOpacity>




</View>
        

        
      );
    }
  }

  
