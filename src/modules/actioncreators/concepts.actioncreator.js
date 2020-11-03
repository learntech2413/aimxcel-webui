import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import { checkCacheValid } from "redux-cache";
import {Environment} from '../../configurations/environment';


const getLessionByLessionId = (lession, lessionByLessionId) =>({type:ACTIONTYPES.LESSIONS.GET_LESSIONS_BY_CLASSNO_SUBJECT_LESSIONID, payload:lession, lessionByLessionId:lessionByLessionId});
const updateLessionsInfoByLessionId = (storeData, lessionByLessionId) => ({type:ACTIONTYPES.LESSIONS.UPDATE_LESSIONS_BY_CLASSNO_SUBJECT_LESSIONID, payload:storeData,lessionByLessionId:lessionByLessionId})
const resetLession= (storeData) =>({type:ACTIONTYPES.LESSIONS.RESET_LESSIONS_BY_CLASSNO_SUBJECT_LESSIONID, payload: storeData  });


const FETCH_TIMEOUT = Environment.FETCH_TIMEOUT;
let didTimeOut = false;

  export const getLessionsBySubjectAndLession = (classNo, subject, lessionNo) => (dispatch, getState) => {
    return new Promise((resolve, reject)=>{
     didTimeOut = false;
     const timeout = setTimeout(function() {
       didTimeOut = true;
       reject('Timeout');
   }, FETCH_TIMEOUT);
 
     const isCacheValid = checkCacheValid(getState, "lessionsBySubjectndLessionId",{cacheKey:classNo+'_'+subject+'_'+lessionNo+"_time"});
     if (isCacheValid) {
       var state = getState();
       dispatch(updateLessionsInfoByLessionId(state.lessionsBySubjectndLessionId, classNo+'_'+subject+'_'+lessionNo)) 
       return  resolve(state.lessionsBySubjectndLessionId[classNo+'_'+subject+'_'+lessionNo]);
       }
  
       var apiUrl = 'lessonByClassNoAndSubjectAndLessonNo/' + classNo+'/'+subject+'/'+lessionNo;
      return ApiRequest.url(apiUrl)
       .get()
       .json(json=> {
          // Clear the timeout as cleanup         
          clearTimeout(timeout);
          if(!didTimeOut) {
              dispatch(getLessionByLessionId(json, classNo+'_'+subject+'_'+lessionNo));
              resolve(json);
          }
       })
       .catch(error=>{console.log('error in lessions api')});
     })
    
   };
 

   export const resetLessionsBySubjectAndLessionId=()=> (dispatch, getState)=>{
    var state = getState();
      return  dispatch(resetLession(state.lessionsBySubjectndLessionId)) 
      //return dispatch(resetUnit());
  }