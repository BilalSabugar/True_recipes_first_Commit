import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import category from '../HomeItems/category';
import Favourite from '../HomeItems/Favourite';
import HomeScreen from '../Homescreen/HomeScreen';
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu';


export const AppDrawerNavigator = createDrawerNavigator({
   True_Recipies : {
     screen: AppTabNavigator
   },

//   HomeScreen:{
//     screen:AppTabNavigator
//   },
//  Category:{
//    screen:AppTabNavigator},
 
//  Favourite:{
//    screen:AppTabNavigator
//  }


},
{
    contentComponent:CustomSideBarMenu
}

);
