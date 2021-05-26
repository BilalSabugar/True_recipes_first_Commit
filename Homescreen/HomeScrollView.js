// import React , {useState} from 'react';
// import { Text , View , StyleSheet , TouchableOpacity , Image , Alert , StatusBar , Linking, Button ,ScrollView,KeyboardAvoidingView,TextInput} from 'react-native';
// import firebase from 'firebase'; 
// import config from '../config';
// //import NetInfo from '@react-native-community/netinfo';
// import ImageLoad from 'react-native-image-placeholder';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// export default class HomeScrollView extends React.Component {


//   constructor(){
//     super();
//     this.state={
//       image1:'',
//       image2:'',
//       image3:'',
//       image4:'',
//       image5:'',
//       image6:'',
//       image7:'',
//       image8:'',
//       image9:'',
//       image10:'',

//       styleImage1:1,
//       Navigation1:'',
//       Navigation2:'',
//       Navigation3:'',
//       Navigation4:'',
//       Navigation5:'',


//       HomeScreenViews1:0,
//       HomeScreenViews2:0,
//       HomeScreenViews3:0,
//       HomeScreenViews4:0,
//       HomeScreenViews5:0,
//       HomeScreenViews6:0,
//       HomeScreenViews7:0,
//       HomeScreenViews8:0,
//       HomeScreenViews9:0,
//       HomeScreenViews10:0,

//       FirebaseViewValue1 :'',
//       FirebaseViewValue2 :'',
//       FirebaseViewValue3 :'',
//       FirebaseViewValue4 :'',
//       FirebaseViewValue5 :'',
//       FirebaseViewValue6 :'',
//       FirebaseViewValue7 :'',
//       FirebaseViewValue8 :'',
//       FirebaseViewValue9 :'',
//       FirebaseViewValue10:'',
//       ElegebelForView1:false,



//       userId :  firebase.auth().currentUser.email,



//     }
//   }

//   getUserDetails=()=>{
//     var email = firebase.auth().currentUser.email
//     config.collection('users').where('email_id','==',email).get()
//     .then(snapshot => {
//       snapshot.forEach(doc => {
//       var data = doc.data()
//       console.log(doc.id);
//         this.setState({
//           docId     : doc.id,

//           FirebaseViewValue1  :  data.HomeScreenViewsId1,
//           FirebaseViewValue2  :  data.HomeScreenViewsId2,
//           FirebaseViewValue3  :  data.HomeScreenViewsId3,
//           FirebaseViewValue4  :  data.HomeScreenViewsId4,
//           FirebaseViewValue5  :  data.HomeScreenViewsId5,
//           FirebaseViewValue6  :  data.HomeScreenViewsId6,
//           FirebaseViewValue7  :  data.HomeScreenViewsId7,
//           FirebaseViewValue8  :  data.HomeScreenViewsId8,
//           FirebaseViewValue9  :  data.HomeScreenViewsId9,
//           FirebaseViewValue10 : data.HomeScreenViewsId10,

          
//         })
//       });
//     })
//     console.log(this.state.docID);
//   }
//   ViewsCount1=()=>{
//     console.log(this.state.ElegebelForView1)
//     console.log(this.state.FirebaseViewValue1)


//     this.setState({ElegebelForView1:true})
//     this.setState({FirebaseViewValue1:this.state.FirebaseViewValue1+1})
//     if(this.state.FirebaseViewValue1==1){
//        if(this.state.ElegebelForView1==true){
         
//         config.collection('Views')
//         .doc('HomescreenViews')
//         .update({'HomeScreenViews1': this.state.HomeScreenViews1+1})
        
//        }
//     }
//   }

//   componentDidMount(){
    
//     this.getUserDetails()

//     config.collection('Image').doc('Image1').onSnapshot((data)=>{
//       const images = data.data()
//       this.setState({image1:images.image1,image2:images.image2,image3:images.image3,image4:images.image4,image5:images.image5,
//                       image6:images.image6,image7:images.image7,image8:images.image8,image9:images.image9,image10:images.image10,

//                   Navigation1:images.Navigation1,Navigation2:images.Navigation2,Navigation3:images.Navigation3,Navigation4:images.Navigation4,
//                   Navigation5:images.Navigation5,
                
//                 })
//           })

//           config.collection('Views').doc('HomescreenViews').onSnapshot((data)=>{
//             const Views = data.data()
//             this.setState({
                      
//                         HomeScreenViews1:Views.HomeScreenViews1 , HomeScreenViews2:Views.HomeScreenViews2,
//                         HomeScreenViews3:Views.HomeScreenViews3 , HomeScreenViews4:Views.HomeScreenViews4,
//                         HomeScreenViews5:Views.HomeScreenViews5 , HomeScreenViews6:Views.HomeScreenViews6,
//                         HomeScreenViews7:Views.HomeScreenViews7 , HomeScreenViews8:Views.HomeScreenViews8,
//                         HomeScreenViews9:Views.HomeScreenViews9 , HomeScreenViews10:Views.HomeScreenViews10
                      
//                       })
//                 })
//         }



//     render() {
//       return (
        
//         <View  style={{backgroundColor:('#f0f0f0'),marginTop:75,borderTopWidth:0.5,borderTopColor:'black'}}>
          

// <View style={{backgroundColor:('#55555')}}>


//           <View>
//           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CustomSideBarMenu')}} >
//           <Text style={{fontSize:20,alignSelf:'flex-start',marginBottom:17.5,marginLeft:10,}}>This weeks top 10 recipes</Text>
//           </TouchableOpacity>













        //   <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{ this.ViewsCount1()}}>

        //       <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

        //       <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews1}</Text>

        //   </TouchableOpacity>













         
 





//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews2': this.state.HomeScreenViews2+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews2}</Text>

//           </TouchableOpacity>












  





//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews3': this.state.HomeScreenViews3+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews3}</Text>

//           </TouchableOpacity>












  





//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews4': this.state.HomeScreenViews4+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews4}</Text>

//           </TouchableOpacity>











 





//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews5': this.state.HomeScreenViews5+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews5}</Text>

//           </TouchableOpacity>
















//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews6': this.state.HomeScreenViews6+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews6}</Text>

//           </TouchableOpacity>


















//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews7': this.state.HomeScreenViews7+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews7}</Text>

//           </TouchableOpacity>

















//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews8': this.state.HomeScreenViews8+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews8}</Text>

//           </TouchableOpacity>

















//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews9': this.state.HomeScreenViews9+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews9}</Text>

//           </TouchableOpacity>

















//           <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
//                                                                         config.collection('Views')
//                                                                         .doc('HomescreenViews')
//                                                                         .update({'HomeScreenViews10': this.state.HomeScreenViews10+1})}}>

//               <ImageLoad  source={{uri: this.state.image1}} style = {{width:300,height:100}}></ImageLoad>

//               <Text style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',alignSelf:'flex-end',fontWeight:'bold'}}> Views:{this.state.HomeScreenViews10}</Text>

//           </TouchableOpacity>











//           <Text style={{fontSize:20,alignSelf:'center', marginTop:12.5}}>Thats much for this week</Text>


//           </View>
//           </View>
//           </View>
        
        
//       );
//     }
//   }

  


//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: StatusBar.currentHeight,
//       marginLeft: 150
//     },
//     searchBar:{
//       flexDirection:'row',
//       height:55,
//       width:'auto',
//       alignItems:'center',
//       backgroundColor:'#5597ff',
//       marginTop:StatusBar.currentHeight
//     },
//     modalContainer:{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//       backgroundColor:"#ffff",
//       borderWidth:1,
//       borderColor:'black',
//       width:225
//     },

//   })
