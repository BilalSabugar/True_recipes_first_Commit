import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import firebase from 'firebase';
import config from '../config'
import MyHeader from '../components/MyHeader';
import { Alert } from 'react-native';

export default class WishList extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
      WishList : [],
      Title:[],
      Image:[],
      Navigation:[],
      docId:[]
    }
  this.requestRef= null
  }

  getDocId = async(i) =>{
      config.collection('WishList')
      .where('Title','==',i.Title)
      .where('Image','==',i.Image)
      .where('navigation','==',i.navigation)
      .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            firebase.firestore().collection('WishList').doc(doc.id).delete()
          })
          
      })
    }

  getList =()=>{
    this.requestRef = config.collection("WishList").where('userId','==',this.state.userId)
    .onSnapshot((snapshot)=>{
      var WishList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        WishList : WishList
      });
    })
  }

  // Delete=async()=>{

  // }

  componentDidMount(){
    this.getList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.Title}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        leftAvatar ={<Image
          style={{height:50,width:50,borderRadius:5}}
           source={item.Image}
        />}
        rightElement={
            <TouchableOpacity style={styles.button}
            onPress={()=>{this.props.navigation.navigate(item.navigation)}}>
              
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
          rightAvatar={<Icon type='font-awesome' name='trash-o' onPress={()=>{
            console.log("delete"),
            this.getDocId(item)
          }}/>}
        bottomDivider
      />
    )
  }
//.collection('books').doc(id).delete()
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          {
            this.state.WishList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>No Recipie Added</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.WishList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:80,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 5,
       height: 8
     }
  }
})
