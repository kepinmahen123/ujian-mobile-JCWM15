import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screen/profile/ProfileScreen'

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Button title='logout' onPress={() => dispatch({type: 'AUTH_LOGOUT'})} color='8c0000' />
    </Stack.Navigator>
  );
};

export default ProfileStack;