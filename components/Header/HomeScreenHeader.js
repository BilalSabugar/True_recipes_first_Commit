import React from 'react';
import { View ,Text, TouchableOpacity , Dimensions} from 'react-native';
import { Image } from 'react-native';


export default class HomeScreenHeader extends React.Component {
  
    render() {
      return (

        <View  style={{backgroundColor:'#ffffff',elevation: 10}}>



          <View style={{backgroundColor:'#ffffff',height:60,flexDirection:'row',width:Dimensions.get("screen").width}}>

            <TouchableOpacity onPress = {()=>{this.props.navigation.toggleDrawer()}} style={{alignItems:'flex-start',height:'100%',justifyContent:'center',marginLeft:15}}> 


<Image source={require('../../assets/Bars.png')} style={{height:35,width:35,justifyContent:'center'}}></Image>

</TouchableOpacity> 

<View style={{alignItems:'flex-end',height:'100%',justifyContent:'center',marginHorizontal:15}}>
  <Text style={{fontSize:20,fontWeight:'bold',color:'#696969'}}>
    Homescreen
  </Text>
</View>

</View>

        


          </View>



        
      );
    }
  }

