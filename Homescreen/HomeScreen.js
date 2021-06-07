import React from 'react';
import { View , StyleSheet, TouchableOpacity} from 'react-native';
import { Image , Text} from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from 'react-native-paper';
import HomeScreenHeader from '../components/Header/HomeScreenHeader';


export default class HomeScreen extends React.Component {
  
  render() {
    return (
              
      <View style={{height:'100%',width:'100%',backgroundColor:'#4a4a4a'}}>

        <HomeScreenHeader navigation = { this.props.navigation } />

        <View style={{alignItems:'center',height:'80%',justifyContent:'space-around',flexDirection:'column'}}>

  



        <View style={{height:'40%',width:'85%',borderRadius:20}}>
            
            <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Category')}}>
      
              <Card style={{backgroundColor:'rgba(255,255,255,0.25)',height:'100%',width:'100%',alignSelf:'center',borderRadius:20}}>

                <View style={{justifyContent:'center',height:'100%'}}>

                  <Icon type='font-awesome' name='cutlery' size={50} color='#ffffff'></Icon>
                  <Text style={{fontSize:50,color:'#ffffff',fontWeight:'bold',alignSelf:'center'}}>Category</Text>

                </View>

              </Card>
  
            </TouchableOpacity>
    
          </View>


          <View style={{height:'40%',width:'85%',borderRadius:20}}>
            
            <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('WishList')}}>
      
              <Card style={{backgroundColor:'rgba(255,255,255,0.25)',height:'100%',width:'100%',alignSelf:'center',borderRadius:20}}>

                <View style={{justifyContent:'center',height:'100%'}}>

                  <Icon type='font-awesome' name='gratipay' size={50} color='#ffffff'></Icon>
                  <Text style={{fontSize:50,color:'#ffffff',fontWeight:'bold',alignSelf:'center'}}>Wish List</Text>

                </View>

              </Card>
  
            </TouchableOpacity>
    
          </View>
        
        </View>

      </View>
 
    );
  }
}

  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 150
    },
    searchBar:{
      flexDirection:'row',
      height:55,
      width:'auto',
      alignItems:'center',
      backgroundColor:'#5597ff',
    },
    modalContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ffff",
      borderWidth:1,
      borderColor:'black',
      width:225
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },

  })
