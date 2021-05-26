import React, { useState , useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View , Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Speech from 'expo-speech';



export default function Aloo_Tamatar_Ka_Jhol({ navigation }) {



  const [ Step ,setStep ] = useState(0);
  const [ Recipes ,setRecipes ] = useState('');
  const [ Heading , setHeading ] = useState('Ingridients')
  const [ shouldShow , setShouldShow ] = useState(true);
  const [ isFinished , setIsFinished ] = useState(false);
  const [ Size , setSize ] = useState(0);
  const [ shouldShowSpeak , setShouldShowSpeak ] = useState(false)
  const [toggle, setToggle] = useState(true);


  const toggleFunction = () => {
    setToggle(!toggle);
  };


    Speak=()=>{
        
        Speech.speak(Heading + '.' + '.' + Recipes,{
        language: 'en',
        pitch:1.0,
        rate:0.8,
        onDone:setToggle(!toggle),
        
        });
      }

    useEffect(() => {

      if(Step == 0 ) {
        setShouldShowSpeak(false)
        setShouldShow(false)
        setHeading('Ingrediets')
        setSize(20)

        setRecipes(
        
          "1" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "2 )" +  "  250 gm paneer."
  
          +'\n'+'\n'+
  
          "3" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "4" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "5 )" +  "  250 gm paneer." 
  
          +'\n'+'\n'+
  
          "6" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "7" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "8 )" +  "  250 gm paneer." 
  
          +'\n'+'\n'+
  
          "9" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "10" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "11 )" +  "  250 gm paneer." 
  
          +'\n'+'\n'+
  
          "12" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "13" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "14 )" +  "  250 gm paneer."
  
          +'\n'+'\n'+
  
          "15" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "16" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "17 )" +  "  250 gm paneer." 
  
          +'\n'+'\n'+
  
          "18" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "19" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "20 )" +  "  250 gm paneer." 
  
          +'\n'+'\n'+
  
          "21" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "22" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "23 )" +  "  250 gm paneer." 
  
          +'\n'+'\n'+
  
          "24" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "25" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'+
  
          "26 )" +  "  250 gm paneer." 
  
          +'\n'+'\n'+
  
          "27" + ' )' +  "  2 potatoes, parboiled."
  
          +'\n'+'\n'
  
          )

      }else{setShouldShow(true)}

      if(Step == 1){
        Speech.stop()
        setShouldShowSpeak(false)
        setShouldShow(true)
        setHeading('Information')
        setRecipes(

         "Preparation Time : 5 Seconds"
  
        +'\n'+'\n'+

        "Total Cook Time: 25 mins & 5 sec"

        +'\n'+'\n'+

        "Recipe Servings: 4"

        +'\n'+'\n'+

        "Cook Time: 25 minutes"

        +'\n'+'\n'+

        "Difficulty Level: Easy"

        )

        setSize(22)
      }

      
      if(Step == 2){
        setHeading('Step 1')
        setSize(25)
        setRecipes('In a bowl marinate the par boiled potatoes with turmeric, salt, chilli powder and some oil. Flash fry them. Keep aside.')
        setShouldShowSpeak(true)
      }
      if(Step == 3){
        setHeading('Step 2')
        setRecipes('In another bowl marinate the paneer cubes with turmeric, salt, chilli powder and some oil. Flash fry them. Keep aside.')
      }
      if(Step == 4){
        setHeading('Step 3')
        setRecipes('For the gravy:' + '\n' + '\n' + 'In a pan add oil, black cardamom, green cardamom, cinnamon, cloves and cumin seeds. Saute.')
      }
      if(Step == 5){
        setHeading('Step 4')
        setRecipes('Add chopped onions and saute till they start to turn golden. Add ginger, garlic and green chillies.')
      }
      if(Step == 6){
        setHeading('Step 5')
        setRecipes('Then add turmeric, cumin powder, coriander powder, hing and tomatoes. Once the tomatoes start to wilt add water to speed up the cooking process. Cook on simmer for 3-4 minutes.')
      }
      if(Step == 7){
        setHeading('Step 6')
        setRecipes('Add milk and butter. Cook for another 3-4 minutes and add the fried potatoes and paneer. Simmer for 3-4 minutes.')
      }
      if(Step == 8){
        setHeading('Step 7')
        setRecipes('Serve garnished with chopped mint leaves.')
        setSize(25)
      }
      if(Step == 9){
        setIsFinished(true)
        setShouldShow(false)
        
      }


    
    })

    if(isFinished==true){
    

      return(

        <View style={{backgroundColor:'#9acd32',height:'100%'}}>

          

      <Image style={{position:'absolute',height:'150%',width:'150%'}} source={require('./confetti-10.gif')} ></Image>


          

          

          <Text style={{color:'white',marginTop:'25%',fontWeight:'bold',alignSelf:'center',fontSize:45}}>Congratulations!</Text>

          <View>

            <Text style={{color:'white',marginTop:'01%',fontWeight:'bold',alignSelf:'center',fontSize:30}}>You have done it</Text>

          </View>
          
          <View style={{ flexDirection:'row' , justifyContent:'space-between' , height:'70%' , alignItems:'flex-end' }} >

          <NavigationContainer>

              <TouchableOpacity style={{ marginLeft:10 , width:75 , alignItems:'center' , justifyContent:'center' , height:75 , borderRadius:50 , backgroundColor:'white'}} 
                      onPress={() => {
                        navigation.navigate('HomeScreen');
                      }} >

                <Icon type='font-awesome' name='home' color='#4a4a4a' size={50} ></Icon>

              </TouchableOpacity>

            </NavigationContainer>

            <TouchableOpacity style={{ marginRight:10 , width:75 , alignItems:'center' , justifyContent:'center' , height:75 , borderRadius:50 , backgroundColor:'white'}} 
              onPress={()=>{ setStep(0) , setIsFinished(false) , setShouldShow(false) }} >

              <Icon type='font-awesome' name='repeat' color='#4a4a4a' size={50} ></Icon>

            </TouchableOpacity>
          
          </View>

        </View>

      );

}



      return (
    

        <View  style={{backgroundColor:'#9acd32',height:'100%',width:'100%',flexDirection:'column'}}>

<Text style={{justifyContent:'flex-start',fontSize:40,color:'#ffffff',fontWeight:'bold',marginLeft:15,marginTop:20,marginBottom:10}}>{Heading}</Text>


<ScrollView style={{borderColor:'#ffffff',borderTopWidth:0.8,borderBottomWidth:0.8,alignSelf:'center',width:'90%'}}>

<Text style={{justifyContent:'flex-start',fontSize:Size,color:'#ffffff',fontWeight:'800',marginLeft:15,marginTop:20}}>{Recipes}</Text>


{shouldShowSpeak ? (

<TouchableOpacity style={{ marginTop:10 , alignSelf:'flex-end' , marginRight:10 , width:70 , alignItems:'center' , justifyContent:'center' , height:70 , borderRadius:50 , backgroundColor:'white'}} 
onPress={()=>{ toggleFunction() , toggle ? Speak() : Speech.stop() }} >

<Icon type='font-awesome' name='volume-up' color='#4a4a4a' size={45} ></Icon>

</TouchableOpacity>

) : null}
</ScrollView>





<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>


{shouldShow ? (

        <TouchableOpacity style={{flexDirection:'row',marginBottom:20}} onPress={()=>{ setStep(Step-1) , toggleFunction() , Speech.stop() }}>

          <Image style={{backgroundColor:'#ffffff',borderRadius:100,width:40,height:40,marginLeft:15}} source={require('../../../assets/All-Icons/previous.png')}></Image>

          <Text style={{color:'#ffffff',alignSelf:'center',fontSize:25,fontWeight:'bold',marginLeft:15}} >Previous</Text>

        </TouchableOpacity>

        ) : null}

<View>

<TouchableOpacity style={{alignSelf:'flex-end',flexDirection:'row',marginBottom:20}} onPress={()=>{ setStep(Step+1) , toggleFunction() , Speech.stop() }}>

  <Text style={{color:'#ffffff',alignSelf:'center',fontSize:25,fontWeight:'bold',marginRight:15,marginHorizontal:15}} >Next</Text>

  <Image style={{backgroundColor:'#ffffff',borderRadius:100,width:40,height:40,marginRight:15}} source={require('../../../assets/All-Icons/Next.png')}></Image>

</TouchableOpacity>

</View>

</View>

</View>
        

        
      );
    }
  

  
