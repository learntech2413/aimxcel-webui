import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import { checkCacheValid } from "redux-cache";
import {Environment} from '../../configurations/environment';


const getLessions = (lessions, classNoBySubject) => ({ type: ACTIONTYPES.LESSIONS.GET_LESSIONS_BY_CLASSNO_SUBJECT, payload: lessions, classNoBySubject: classNoBySubject});
const resetLessions= (storeData) =>({type:ACTIONTYPES.LESSIONS.RESET_LESSIONS_BY_CLASSNO_SUBJECT, payload: storeData  });
const updateLessionsInfo = (storeData, classNoBySubject) => ({ type: ACTIONTYPES.LESSIONS.UPDATE_LESSIONS_BY_CLASSNO_SUBJECT, payload: storeData,classNoBySubject: classNoBySubject});

const FETCH_TIMEOUT = Environment.FETCH_TIMEOUT;
let didTimeOut = false;

  export const getLessionsBySubject = (classNo, subject) => (dispatch, getState) => {
   return new Promise((resolve, reject)=>{
    didTimeOut = false;
    const timeout = setTimeout(function() {
      didTimeOut = true;
      reject('Timeout');
  }, FETCH_TIMEOUT);

    const isCacheValid = checkCacheValid(getState, "lessionsBySubject",{cacheKey:classNo+'_'+subject+"_time"});
    if (isCacheValid) {
      var state = getState();
      dispatch(updateLessionsInfo(state.lessionsBySubject, classNo+'_'+subject)) 
      return  resolve(state.lessionsBySubject[classNo+'_'+subject]);
      }

      var apiUrl = 'lessonByClassNoAndSubject/' + classNo+'/'+subject;
     return ApiRequest.url(apiUrl)
      .get()
      .json(json=> {
       
         clearTimeout(timeout);
         if(!didTimeOut) {
             dispatch(getLessions(json, classNo+'_'+subject));
             resolve(json);
         }
      })
      .catch(error=>{console.log('error in lessions api')});
    })
   
  };

  export const resetLessionsBySubject=()=> (dispatch, getState)=>{
    var state = getState();
      return  dispatch(resetLessions(state.lessionsBySubject)) 
      //return dispatch(resetUnit());
  }