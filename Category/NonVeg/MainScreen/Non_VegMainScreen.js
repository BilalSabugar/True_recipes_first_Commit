import React from 'react';
import { View ,Text, TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native';
import { Card } from 'react-native-paper';



export default class VegMainScreen extends React.Component {




    render() {
      return (

        <View  style={{backgroundColor:'#9c130a',justifyContent:'center',height:Dimensions.get("screen").height}}>

<View style={{borderBottomWidth:0.5,borderBottomColor:'#ffffff',marginBottom:8,elevation:1.3}}>

<TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
  <Image style={{alignSelf:'flex-start',height:25,width:35,marginLeft:15,marginTop:15,marginBottom:8}} source={require('../../../assets/All-Icons/back_arrow1.png')}></Image>
</TouchableOpacity>

</View>


{/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/} 




          <ScrollView style={{height:'100%',backgroundColor:'#be350c'}}>




            <View style={{marginBottom:15}}></View>






<Card style={{backgroundColor:'#be350c'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>

                {/* <Image style={{borderRadius:10,width:Dimensions.get("screen").width-25,height:Dimensions.get("screen").height-575}} source={require('../../../assets/VegScreenImages/WholeWheatPasta.png')}></Image> */}
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/NonVegScreenImages/Murgh_Kali_Mirch_Ka_Tikka.png')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Murgh Kali Mirch Ka Tikka</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>





<Card style={{backgroundColor:'#be350c',marginTop:15}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Aloo_Tamatar_Ka_Jhol')}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/NonVegScreenImages/Meat_Lovers_Pizza.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Meat Lovers Pizza</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>





<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/NonVegScreenImages/Tawa_mutton.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Tawa mutton</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>




<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/NonVegScreenImages/Mutton_Khichda.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Mutton Khichda</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>


<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/NonVegScreenImages/Dum_Biryani_Risotto.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Dum Biryani Risotto</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/NonVegScreenImages/Riceless_Chicken_Biryani.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Riceless Chicken Biryani</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Vegetable_Pakoda.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Roast Turkey with Cranberry Sauce</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Green_Pea_Upma.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Laal Maas</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>


<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Vegetable_Fried_Rice.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Vegetable Fried Rice</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Kadhi2.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Rajasthani Kadhi With Tofu Palak Pakoda</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>


<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Ghavan.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Ghavan</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Hariyali_Biryani_Risotto.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Hariyali Biryani Risotto</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Tiranga_Lasagna.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Tiranga Lasagna</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Labra.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Labra (Mixed Veg)</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>


<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Paneer_Thread_Rolls.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Paneer Thread Rolls</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Spinach_and_Feta_Crepes.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Spinach and Feta Crepes</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Methi_Palak.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Methi Palak</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>






<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Jeera-Vegetables.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Jeera Vegetables</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>





<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Southern-Style-Okra.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Southern Style Okra</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

<Card style={{backgroundColor:'#be350c',marginTop:15}}>

<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>

              <View>

                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/VegScreenImages/Indian-Stir-Fry.png')}></Image>
              
              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:Dimensions.get("screen").width}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Indian Stir Fry</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:150}}></View>

</View>

</Card>



          </ScrollView>

          

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        </View>

        
      );
    }
  }

  
