import Cookies from 'js-cookie';
import "isomorphic-fetch";
import {  ApiRequest } from './../utility'
export const AUTHENTICATE = 'auth/AUTHENTICATE';
export const SET_CURRENT_USER = 'auth/SET_CURRENT_USER';

const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: action.authenticated
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      };

    default:
      return state;
  }
};

export const setCurrentUser = user => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: SET_CURRENT_USER,
      user
    });
    Cookies.set('mywebsite', user);
    dispatch({
      type: AUTHENTICATE,
      authenticated: true
    });
    resolve(user);
  });

export const establishCurrentUser = () => dispatch =>
  new Promise(resolve => {
    let userFromCookie = Cookies.getJSON('mywebsite');
    if (userFromCookie) {
      dispatch(setCurrentUser(userFromCookie));
      resolve(userFromCookie);
    } else {
      resolve({});
    }
  });

export const loginUser = (email, password) => dispatch =>
  new Promise((resolve, reject) => {
    const user = {
      email:email,
      password:password
    };
    console.log(user)
    try{
      return ApiRequest.url('auth/login')
      .post(user)
      .json(json=>{
        dispatch(setCurrentUser(json));
        resolve(json);
      }
      )
      .catch(error=>{console.log('error in login api')});
      }
      catch{
        resolve({})
      }


  });

export const logoutUser = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: AUTHENTICATE,
      authenticated: false
    });

    dispatch({
      type: SET_CURRENT_USER,
      user: {}
    });

    Cookies.remove('mywebsite');
    resolve({});
  });
