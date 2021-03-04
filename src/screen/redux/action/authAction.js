import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const {api} = require('../../../api')
const url = `${api}`


export const loginAction = (username) => {
  return async (dispatch) => {
    try {
      dispatch({type: 'AUTH_LOGIN', payload: username})
      AsyncStorage.setItem('username', username)
    } catch (err) {
      console.log(err)
    }
  }
}

export const keepLoginAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${url}/keep-login`,
        {},
        )
        const {username} = response.data
        dispatch ({
          type: 'AUTH_SUCCESS',
          payload: {username},
        })
    } catch (err) {
      dispatch({type: 'AUTH_FAILED', payload: err.response.data})
    }
  }
}

export {
  loginAction,
  keepLoginAction,
}