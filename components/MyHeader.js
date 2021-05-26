import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const MyHeader = (props) => {
  return (
    <Header
      leftComponent = {<Icon name = 'bars' type = 'font-awesome' color = '#696969' onPress = {()=>{
        props.navigation.toggleDrawer()
      }}></Icon>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:25,fontWeight:"bold",alignSelf:'flex-start',left:-25 } }}
      backgroundColor = "#ffffff"
    />
  );
};

export default MyHeader;