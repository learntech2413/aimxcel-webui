import "isomorphic-fetch";
import { ApiRequest } from '../../utility' ;
import {ACTIONTYPES} from '../../configurations/actiontypes';

export const userLogin = (formData) =>{
    var apiUrl = 'login';
    return ApiRequest.url(apiUrl).
    post(formData)
    .json(json=> json)
    .catch(error=>{console.log('error in login user')});
  }