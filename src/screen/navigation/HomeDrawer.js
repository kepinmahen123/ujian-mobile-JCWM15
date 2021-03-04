import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native'
import {Button} from 'native-base'

const Drawer = createDrawerNavigator()

const HomeDrawer = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeNav} />
      <Drawer.Screen name='Profile' component={ProfileStack} />
      <DrawerContentScrollView>
        <DrawerItemList {...route} />
      <Button title='logout' onPress={() => dispatch({type: 'AUTH_LOGOUT'})} color='8c0000' />
      </DrawerContentScrollView>
    </Drawer.Navigator>
  )
}

export default HomeDrawer;