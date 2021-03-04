import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { Button, Item, Label, Input } from 'native-base';
import {loginAction} from '../../../src/redux/action'
import {useDispatch} from 'react-redux'
 
const LoginScreen = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const handleLoginBtn = () => {
    const data = {
      username,
      password,
    }
    dispatch(loginAction(data))
    alert('Login Berhasil')
  }
  
  return (
      <View>
      <View>
        <View>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input onChangeText={(e) => setUsername(e)} />
          </Item>
          <Item stackedLabel>
            <Label>Password</Label>
            <Input onChangeText={(e) => setPassword(e)} secureTextEntry />
          </Item>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen;