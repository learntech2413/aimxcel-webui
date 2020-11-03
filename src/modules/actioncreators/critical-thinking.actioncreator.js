import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import { checkCacheValid } from "redux-cache";
import {Environment} from '../../configurations/environment';


const getQuestions = (questions, criticalThinkingId) => ({ type: ACTIONTYPES.CRITICAL_THINKING.GET_CRITICAL_THINKING_BY_CRITICAL_THINKING_ID, payload: questions, criticalThinkingId: criticalThinkingId});
const resetQuestions = (storeData) =>({type:ACTIONTYPES.CRITICAL_THINKING.RESET_CRITICAL_THINKING_BY_CRITICAL_THINKING_ID, payload: storeData  });
const updateQuestions = (storeData, criticalThinkingId) => ({ type: ACTIONTYPES.CRITICAL_THINKING.UPDATE_CRITICAL_THINKING_BY_CRITICAL_THINKING_ID, payload: storeData,criticalThinkingId: criticalThinkingId});

const FETCH_TIMEOUT = Environment.FETCH_TIMEOUT;
let didTimeOut = false;

  export const getQuestionsByCriticalThinkingId = (criticalThinkingId) => (dispatch, getState) => {
   return new Promise((resolve, reject)=>{
    didTimeOut = false;
    const timeout = setTimeout(function() {
      didTimeOut = true;
      reject('Timeout');
  }, FETCH_TIMEOUT);

    const isCacheValid = checkCacheValid(getState, "questionsByCriticalThinkingId",{cacheKey:criticalThinkingId+"_time"});
    if (isCacheValid) {
      var state = getState();
      dispatch(updateQuestions(state.questionsByCriticalThinkingId, criticalThinkingId)) 
      return  resolve(state.questionsByCriticalThinkingId[criticalThinkingId]);
      }

      var apiUrl = 'questionsByCriticalThinkingId/' + criticalThinkingId;
     return ApiRequest.url(apiUrl)
      .get()
      .json(json=> {
         
         clearTimeout(timeout);
         if(!didTimeOut) {
             dispatch(getQuestions(json, criticalThinkingId));
             resolve(json);
         }
      })
      .catch(error=>{console.log('error in lessions api')});
    })
   
  };

  export const resetQuestionsByCriticalThinkingId=()=> (dispatch, getState)=>{
    var state = getState();
      return  dispatch(resetQuestions(state.questionsByCriticalThinkingId)) 
      //return dispatch(resetUnit());
  }