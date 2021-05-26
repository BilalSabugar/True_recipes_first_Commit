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
Ingredients Of Vegetable Sandwich
</Text>

<View style={{borderBottomWidth:1,borderBottomColor:'grey',width:'95%',alignSelf:'center'}}>
</View>



<ScrollView style={{height:'80%'}}>

<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>For the Sandwich:</Text>
  

<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'800',marginLeft:15,marginTop:20}}>
1{' '+').'}  1/2 red, green and yellow bell peppers.{'\n'}
{'\n'}
2{' '+').'}  1 onion.{'\n'}
{'\n'}
3{' '+').'}  40 gm leak.{'\n'}
{'\n'}
4{' '+').'}  1 small egg plant.{'\n'}
{'\n'}
5{' '+').'}  50 gm yellow squash.{'\n'}
{'\n'}
6{' '+').'}  50 gm zucchini.{'\n'}
{'\n'}
7{' '+').'}  50 gm broccoli, cut into florets.{'\n'}
{'\n'}
8{' '+').'}  Handful of lettuce leaves.{'\n'}

{'\n'}

9{' '+').'}  Salt and pepper to season.{'\n'}
{'\n'}
10{' '+').'}  2-3 Tbsp olive oil.{'\n'}
{'\n'}
11{' '+').'}  3-4 slices of Brie.{'\n'}
{'\n'}

</Text>


<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>For the Marinade:</Text>


<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'800',marginLeft:15,marginTop:20}}>
1{' '+').'}  1 Tbsp balsamic vinegar.{'\n'}
{'\n'}
2{' '+').'}  2 Tbsp olive oil.{'\n'}
{'\n'}
3{' '+').'}  Salt and pepper to season.{'\n'}
{'\n'}
4{' '+').'}  1 tsp chilli flakes.{'\n'}
{'\n'}
5{' '+').'}  2 basil leaves.{'\n'}
{'\n'}
6{' '+').'}  1 sage leaf.{'\n'}
{'\n'}
7{' '+').'}  1 small bunch rosemary, chopped.{'\n'}

</Text>



<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20}}>For the Spread:</Text>


<Text style={{justifyContent:'flex-start',fontSize:20,color:'#ffffff',fontWeight:'800',marginLeft:15,marginTop:20}}>
1{' '+').'}  3 Tbsp cream cheese.{'\n'}
{'\n'}
2{' '+').'}  2 Tbsp plum chutney.{'\n'}
{'\n'}
3{' '+').'}  Salt and pepper to taste.{'\n'}
{'\n'}
4{' '+').'}  Few drops of tobasco.{'\n'}

</Text>



</ScrollView>

<TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',marginBottom:20}} onPress={()=>{this.props.navigation.navigate('VGV_Vegetable_Sandwich_Info')}}>

<Text style={{color:'#ffffff',alignSelf:'center',fontSize:30,fontWeight:'bold',marginRight:25}} >Next</Text>

<Image style={{backgroundColor:'#ffffff',borderRadius:100,width:75,height:75,marginRight:20}} source={require('../../../../assets/All-Icons/Next.png')}></Image>

</TouchableOpacity>




</View>
        

        
      );
    }
  }

  
