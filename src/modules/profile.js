import abclearn from '../app/assets/logo.png';
import {ACTIONTYPES} from '../configurations/actiontypes';
import Cookies from 'js-cookie';

const initialState = {
  currentProfile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONTYPES.PROFILE.SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.profile
      };

    default:
      return state;
  }
};

export const getCurrentProfile = id => dispatch =>
  new Promise(resolve => {
    let userFromCookie = Cookies.getJSON('mywebsite');
    setTimeout(() => {
     /*  let profile;
        profile = {
          id,
          name: 'ABC Learn',
          image: abclearn
        };
 */
      dispatch({
        type: ACTIONTYPES.PROFILE.SET_CURRENT_PROFILE,
        userFromCookie
      });

      resolve(userFromCookie);
    }, 3000);
  });

export const removeCurrentProfile = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: ACTIONTYPES.PROFILE.SET_CURRENT_PROFILE,
      profile: {}
    });

    resolve({});
  });
