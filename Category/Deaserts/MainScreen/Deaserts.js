import React , {useState} from 'react';
import { View , Alert , StyleSheet,StatusBar,Text, TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native';
import { Card } from 'react-native-paper';
import {AdMobBanner} from 'expo-ads-admob';


export default class Deaserts extends React.Component {

 


    render() {
      return (

        <View  style={{backgroundColor:'#FFB6C1',justifyContent:'center',height:'100%'}}>

          <View style={{borderBottomWidth:0.5,borderBottomColor:'#4a4a4a',marginBottom:8,elevation:1.3}}>

            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
              <Image style={{alignSelf:'flex-start',height:25,width:35,marginLeft:15,marginTop:15,marginBottom:8}} source={require('../../../assets/All-Icons/back_arrow1.png')}></Image>
            </TouchableOpacity>

          </View>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  ////////////////////////////////////////////////////////////////////////////////*/}




          <ScrollView style={{height:'100%',backgroundColor:'#FFB6C1'}}>




            <View style={{marginBottom:15}}></View>










<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Almond.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Almond & White Chocolate Gujiya</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>




















<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Almond_And_Rose_Kheer.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Almond And Rose Kheer</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

















<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Anjeer_Kaju_Roll.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Anjeer Kaju Roll</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>





















<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Apple_Rabdi.png')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Apple Rabdi</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

















<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Besan_Ke_Laddoo.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Besan Ke Laddoo</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>






















<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Bhang_Peda.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Bhang Peda</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>





















<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Christmas_Chocolate_Fudge_Cookies.png')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Christmas Chocolate Fudge Cookies</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>




















<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Christmas_Cookies.png')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Christmas Cookies</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>



















            <Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Dudh_Puli.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Dudh Puli</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>






















<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Eggless_Red_Velvet_Pastry.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Eggless Red Velvet Pastry</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>



















            <Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Grilled_Almond_Barfi.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Grilled Almond Barfi</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>























<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Gulab_Jamun.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Gulab Jamun</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

















<Card style={{backgroundColor:'#FFB6C1',marginTop:15,marginBottom:15,alignItems:'center'}}>


<AdMobBanner
  bannerSize="mediumRectangle"
  adUnitID="ca-app-pub-8308648480926492/5940927864"
  onDidFailToReceiveAdWithError={this.bannerError}
  style={{marginBottom:15}}/>

</Card>









<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Kaju_and_Pista_Roll.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Kaju and Pista Roll</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>































<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Kesar_Pista_Phirni.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Kesar Pista Phirni</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>




























            <Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Red_Rice_Vermicelli_Kheer.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Red Rice Vermicelli Kheer</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>































            <Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Saffron_and_Sesame_Modak.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Saffron and Sesame Modak</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>































<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Strawberry_Chia_Pudding.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Strawberry Chia Pudding</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>

























<Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Strawberry_Parfait.png')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Strawberry Parfait</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>























            <Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Valentine_Strawberry_Mousse.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Valentine Strawberry Mousse</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>
























            <Card style={{backgroundColor:'#FFB6C1'}}>


<View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}
            onPress={()=>{this.props.navigation.navigate('Pasta_in_Mushroom_Sauce')}}>

              <View>
              
                <Image style={{borderRadius:10,width:Dimensions.get("window").width-25,height:Dimensions.get("window").height-550}} source={require('../../../assets/DeasertsImages/Zucchini_Halwa.jpg')}></Image>

              </View>
              
              <View style={{alignItems:'flex-start',marginLeft:18,justifyContent:'flex-end',borderRadius:5,height:50,width:"100%"}}>
                
                <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'bold',color:'#ffffff'}}>Zucchini Halwa</Text>

              </View>

            </TouchableOpacity>

            <View style={{marginBottom:20}}></View>

</View>

</Card>








<Card style={{backgroundColor:'#FFB6C1',marginTop:15,marginBottom:25,alignItems:'center'}}>


<AdMobBanner
  bannerSize="mediumRectangle"
  adUnitID="ca-app-pub-8308648480926492/2280884453"
  onDidFailToReceiveAdWithError={this.bannerError}
  style={{marginBottom:10}}/>

</Card>


          </ScrollView>



{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        </View>

        
      );
    }
  }

  
