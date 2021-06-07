import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Homescreen/HomeScreen'
import Favourite from '../HomeItems/Favourite'
import category from '../HomeItems/category'
import Settings from '../screens/Settings'
import WishList from '../screens/WishList'



import VegMainScreen from '../Category/Veg/MainScreen/VegMainScreen';
import Non_VegMainScreen from '../Category/NonVeg/MainScreen/Non_VegMainScreen';
import Salads from '../Category/Salads/MainScreen/Salads';
import Sea_Food from '../Category/Sea_Food/MainScreen/Sea_Food';
import Sweet_Dish from '../Category/Sweet_Dish/MainScreen/Sweet_Dish';
import Deaserts from '../Category/Deaserts/MainScreen/Deaserts';



import Wheat_Pasta_in_Mushroom_Sauce from '../Category/Veg/Recipies/Wheat Pasta in Mushroom Sauce';
import Aloo_Tamatar_Ka_Jhol from '../Category/Veg/Recipies/Aloo_Tamatar_Ka_Jhol';
import Tamarind_Rice from '../Category/Veg/Recipies/Tamarind_Rice';
import Butter_Paneer from '../Category/Veg/Recipies/Butter_Paneer';
import VGV_Vegetable_Sandwich from '../Category/Veg/Recipies/VGV_Vegetable_Sandwich';
import Pommes_Gratin from '../Category/Veg/Recipies/Pommes_Gratin';
import Vegetable_Pakoda from '../Category/Veg/Recipies/Vegetable_Pakoda';
import Green_Pea_Upma from '../Category/Veg/Recipies/Green_Pea_Upma';
import Vegetable_Fried_Rice from '../Category/Veg/Recipies/Vegetable_Fried_Rice';
import Rajasthani_Kadhi_With_Tofu_Palak_Pakoda from '../Category/Veg/Recipies/Rajasthani_Kadhi_With_Tofu_Palak_Pakoda';





export const AppTabNavigator = createStackNavigator({

  HomeScreen : {
    screen: HomeScreen,

    navigationOptions:{
      headerShown : false
  }},
  Favourite : {screen:Favourite},
  Category : {screen:category},
  Settings : { screen : Settings },
  WishList : { screen : WishList },






  VegMainScreen : {screen : VegMainScreen , navigationOptions:{headerShown:false}},
  Non_VegMainScreen : {screen : Non_VegMainScreen , navigationOptions:{headerShown:false}},
  Salads : {screen : Salads , navigationOptions:{headerShown:false}},
  Sea_Food : {screen : Sea_Food , navigationOptions:{headerShown:false}},
  Sweet_Dish : {screen : Sweet_Dish , navigationOptions:{headerShown:false}},
  Deaserts : {screen : Deaserts , navigationOptions:{headerShown:false}},







  Aloo_Tamatar_Ka_Jhol : {screen : Aloo_Tamatar_Ka_Jhol,navigationOptions:{headerShown:false}},

 


  Pasta_in_Mushroom_Sauce : { screen : Wheat_Pasta_in_Mushroom_Sauce,navigationOptions:{headerShown:false} },

 



  Tamarind_Rice : { screen : Tamarind_Rice , navigationOptions:{headerShown:false} },
  
 



  Butter_Paneer : {screen : Butter_Paneer,navigationOptions:{headerShown:false}},

  


  VGV_Vegetable_Sandwich : { screen : VGV_Vegetable_Sandwich , navigationOptions:{headerShown:false} },


  



  Pommes_Gratin : { screen : Pommes_Gratin , navigationOptions:{headerShown:false} },

 


  Vegetable_Pakoda : { screen : Vegetable_Pakoda , navigationOptions:{headerShown:false} },

 




  Green_Pea_Upma : {screen : Green_Pea_Upma,navigationOptions:{headerShown:false}},

  
  

  


  Vegetable_Fried_Rice : {screen : Vegetable_Fried_Rice,navigationOptions:{headerShown:false}},

  


  Rajasthani_Kadhi_With_Tofu_Palak_Pakoda : {screen : Rajasthani_Kadhi_With_Tofu_Palak_Pakoda,navigationOptions:{headerShown:false}},


  

});

