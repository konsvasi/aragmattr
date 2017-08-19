import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

export function login(data) {
  return dispatch => {
    console.log('data', data);
    return axios.post('/login', data).then(res => {
      //get token from response
      const token = res.data.token;
      //save to local storage
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      //dispatch setCurrentUser action
      //with decoded token
      dispatch(setCurrentUser(jwt.decode(token)));
    });
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    return axios.post('/logout');
  }
}
