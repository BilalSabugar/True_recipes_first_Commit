import React , {useState} from 'react';
import { Alert } from 'react-native';
import { View , StyleSheet,StatusBar,Text, TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from 'react-native-paper';


export default class category extends React.Component {
  
    render() {
      return (

        <View  style={{backgroundColor:'#4a4a4a',justifyContent:'center',height:'100%'}}>




{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}




          <ScrollView>




            <View style={{marginBottom:15}}></View>


<Card style={{backgroundColor:'#4a4a4a'}}>


<View style={{borderBottomWidth:0.5,borderBottomColor:"#ffffff"}}>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} onPress={()=>{this.props.navigation.navigate('VegMainScreen')}}>

              <View>

                <Image style={{marginLeft:20,width:75,height:75}} source={require('../assets/icons/Veg.png')}></Image>
              
              </View>
              
              <View style={{marginRight:20,backgroundColor:'#ffffff',alignItems:'center',borderRadius:5,height:50,width:225}}>
                
                <Text style={{fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Veg</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>



<Card style={{backgroundColor:'#4a4a4a'}}>


<View style={{borderBottomWidth:0.5,borderBottomColor:"#ffffff"}}>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
            // onPress={()=>{this.props.navigation.navigate('Non_VegMainScreen')}}
            onPress={()=>{Alert.alert('Locked')}}
            >

              <View>

                <Image style={{marginLeft:20,width:75,height:75}} source={require('../assets/icons/NonVeg.png')}></Image>
              
              </View>
              
              <View style={{marginRight:20,backgroundColor:'#ffffff',alignItems:'center',borderRadius:5,height:50,width:225}}>
                
                <Text style={{fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Non-veg</Text>

              </View>
              
                          <Icon name='lock' type='Font-Awesome' color='#ffffff'></Icon>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>



</View>

</Card>





{/* <Card style={{backgroundColor:'#4a4a4a'}}>


<View style={{borderBottomWidth:0.5,borderBottomColor:"#ffffff"}}>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{marginLeft:20,width:75,height:75}} source={require('../assets/icons/Chinese.png')}></Image>
              
              </View>
              
              <View style={{marginRight:20,backgroundColor:'#ffffff',alignItems:'center',borderRadius:5,height:50,width:225}}>
                
                <Text style={{fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Chinese</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card> */}





<Card style={{backgroundColor:'#4a4a4a'}}>


<View style={{borderBottomWidth:0.5,borderBottomColor:"#ffffff"}}>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
            // onPress={()=>{this.props.navigation.navigate('Salads')}} 
            onPress={()=>{Alert.alert('Locked')}}>

              <View>

                <Image style={{marginLeft:20,width:75,height:75}} source={require('../assets/icons/Salad.png')}></Image>
              
              </View>
              
              <View style={{marginRight:20,backgroundColor:'#ffffff',alignItems:'center',borderRadius:5,height:50,width:225}}>
                
                <Text style={{fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Salads</Text>

              </View>

              <Icon name='lock' type='Font-Awesome' color='#ffffff'></Icon>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>





<Card style={{backgroundColor:'#4a4a4a'}}>


<View style={{borderBottomWidth:0.5,borderBottomColor:"#ffffff"}}>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
            // onPress={()=>{this.props.navigation.navigate('Sea_Food')}} 
            onPress={()=>{Alert.alert('Locked')}}>

              <View>

                <Image style={{marginLeft:20,width:75,height:75}} source={require('../assets/icons/SeaFood.png')}></Image>
              
              </View>
              
              <View style={{marginRight:20,backgroundColor:'#ffffff',alignItems:'center',borderRadius:5,height:50,width:225}}>
                
                <Text style={{fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Sea Food</Text>

              </View>

              <Icon name='lock' type='Font-Awesome' color='#ffffff'></Icon>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>





<Card style={{backgroundColor:'#4a4a4a'}}>


<View style={{borderBottomWidth:0.5,borderBottomColor:"#ffffff"}}>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
            //onPress={()=>{this.props.navigation.navigate('Sweet_Dish')}} 
            onPress={()=>{Alert.alert('Locked')}}>

              <View>

                <Image style={{marginLeft:20,width:75,height:75}} source={require('../assets/icons/Sweet.png')}></Image>
              
              </View>
              
              <View style={{marginRight:20,backgroundColor:'#ffffff',alignItems:'center',borderRadius:5,height:50,width:225}}>
                
                <Text style={{fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Sweet Dish</Text>

              </View>

              <Icon name='lock' type='Font-Awesome' color='#ffffff'></Icon>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#4a4a4a'}}>


<View>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
            //onPress={()=>{this.props.navigation.navigate('Deaserts')}} 
            onPress={()=>{Alert.alert('Locked')}}>

              <View>

                <Image style={{marginLeft:20,width:75,height:75}} source={require('../assets/icons/Deserts.png')}></Image>
              
              </View>
              
              <View style={{marginRight:20,backgroundColor:'#ffffff',alignItems:'center',borderRadius:5,height:50,width:225}}>
                
                <Text style={{fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Deaserts</Text>

              </View>

              <Icon name='lock' type='Font-Awesome' color='#ffffff'></Icon>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>



          </ScrollView>

          

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        </View>

        
      );
    }
  }

  

