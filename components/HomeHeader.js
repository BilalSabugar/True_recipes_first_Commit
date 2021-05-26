import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';

export default class MyHeader extends Component {

  render(){
  return (
    <Header
  
      leftComponent = {<Icon name = 'angle-left' size={40} type = 'font-awesome' color = '#696969'  onPress = {()=>{
        this.props.navigation.toggleDrawer()
      }}></Icon>}
      centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#ffc953"




    />
  
  );
}}