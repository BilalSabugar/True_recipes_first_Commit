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
        
          "1" + ' )' +  "  2 Cups rice (cooked 'bite-like')."
  
          +'\n'+'\n'+
  
          "2 )" +  "  1/2 cup tamarind (made into pulp)."
  
          +'\n'+'\n'+
  
          "3" + ' )' +  "  3 Whole red chillies."
  
          +'\n'+'\n'+
  
          "4" + ' )' +  "  1/4 cup curry leaves."
  
          +'\n'+'\n'+
  
          "5 )" +  "  A pinch of asafoetida." 
  
          +'\n'+'\n'+
  
          "6" + ' )' +  "  1 tsp mustard seeds."
  
          +'\n'+'\n'+
  
          "7" + ' )' +  "  1 tbsp chana dal."
  
          +'\n'+'\n'+
  
          "8 )" +  "  1 tsp urad dal (dhuli)." 
  
          +'\n'+'\n'+
  
          "9" + ' )' +  "  1/4 tsp methi seeds."
  
          +'\n'+'\n'+
  
          "10" + ' )' +  "  1/2 tsp red chillli powder."
  
          +'\n'+'\n'+
  
          "11 )" +  "  1 tbsp peanuts." 
  
          +'\n'+'\n'+
  
          "12" + ' )' +  "  1 tsp salt."
  
          +'\n'+'\n'+
  
          "13" + ' )' +  "  1/4 tsp turmeric powder."
  
          +'\n'+'\n'+
  
          "14 )" +  "  1/4 tsp gur."
  
          +'\n'+'\n'+
  
          "15" + ' )' +  "  Oil."
  
          +'\n'+'\n'
  
          )

      }else{setShouldShow(true)}

      if(Step == 1){
        Speech.stop()
        setShouldShowSpeak(false)
        setShouldShow(true)
        setHeading('Information')
        setRecipes(

         "Preparation Time : 10 Minutes"
  
        +'\n'+'\n'+

        "Total Cook Time: 40 Minutes"

        +'\n'+'\n'+

        "Recipe Servings: 2"

        +'\n'+'\n'+

        "Cook Time: 30 Minutes"

        +'\n'+'\n'+

        "Difficulty Level: Easy"

        )

        setSize(22)
      }

      
      if(Step == 2){
        setHeading('Step 1')
        setSize(25)
        setRecipes('Heat oil and roast peanuts along with both the dals.')
        setShouldShowSpeak(true)
      }
      if(Step == 3){
        setHeading('Step 2')
        setRecipes('Saute till the dals splutter and slightly coloured.')
      }
      if(Step == 4){
        setHeading('Step 3')
        setRecipes('Now add curry leaves and whole red chillies.')
      }
      if(Step == 5){
        setHeading('Step 4')
        setRecipes('Mix them well.')
      }
      if(Step == 6){
        setHeading('Step 5')
        setRecipes('Add salt, hing, red chilli powder and turmeric powder. Saute them well.')
      }
      if(Step == 7){
        setHeading('Step 6')
        setRecipes('Add gur to the cooked mix and saute well. Now add the tamarind pulp to the mix and saute till it becomes a semi thick gravy.')
      }
      if(Step == 8){
        setHeading('Step 7')
        setRecipes('Add salt, hing, red chilli powder and turmeric powder. Saute them well.')
      }
      if(Step == 9){
        setHeading('Step 8')
        setRecipes('Saute it well so the rice is completely mixed with the cooked gravy.')
      }
      if(Step == 10){
        setHeading('Step 9')
        setRecipes('Serve hot, garnished with a tamarind.')
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
  

  
