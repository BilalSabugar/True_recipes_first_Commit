import React , {useState} from 'react';
import { View , StyleSheet,StatusBar,Text, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements'
import config from '../config'
import firebase from 'firebase'


export default class Favourite extends React.Component {
  constructor(){
    super();
    this.state={
      Favourite:[],
      userId: firebase.auth().currentUser.email
      
    }
  }

  componentWillUnmount(){
    this.requestRef();
  }

  
  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }


  getFavouriteRecipiesList =()=>{

    this.requestRef = config.collection("Favourite").where('user_id','==',this.state.userId).then((snapshot)=>{
      var Favourite = snapshot.docs.map((doc) => doc.data())
      this.setState({
        Favourite : Favourite
      });
    })
  }

  componentDidMount(){
    this.getFavouriteRecipiesList()
  }



  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.recipie}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        bottomDivider
      />
    )
  }


  
    render() {
      return (

        <View style={{flex:1}}>
        {
          this.state.Favourite.length === 0
          ?(
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20}}>List Of All Favourite Recipies</Text>
            </View>
          )
          :(
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.Favourite}
              renderItem={this.renderItem}
            />
          )
        }
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
