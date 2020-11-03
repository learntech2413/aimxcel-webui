import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import { checkCacheValid } from "redux-cache";
import {Environment} from '../../configurations/environment';


const getLexicon = (lexicon, lexiconId) => ({ type: ACTIONTYPES.LEXICON.GET_LEXICON_BY_LEXICON_ID, payload: lexicon, lexiconId: lexiconId});
const resetLexicon= (storeData) =>({type:ACTIONTYPES.LEXICON.RESET_LEXICON_BY_LEXICON_ID, payload: storeData  });
const updateLexicon = (storeData, lexiconId) => ({ type: ACTIONTYPES.LEXICON.UPDATE_LEXICON_BY_LEXICON_ID, payload: storeData,lexiconId: lexiconId});

const FETCH_TIMEOUT = Environment.FETCH_TIMEOUT;
let didTimeOut = false;

  export const getLexiconByLexiconId = (lexiconId) => (dispatch, getState) => {
   return new Promise((resolve, reject)=>{
    didTimeOut = false;
    const timeout = setTimeout(function() {
      didTimeOut = true;
      reject('Timeout');
  }, FETCH_TIMEOUT);

    const isCacheValid = checkCacheValid(getState, "lexiconById",{cacheKey:lexiconId+"_time"});
    if (isCacheValid) {
      var state = getState();
      dispatch(updateLexicon(state.lexiconById, lexiconId)) 
      return  resolve(state.lexiconById[lexiconId]);
      }

      var apiUrl = 'lexiconById/' + lexiconId;
     return ApiRequest.url(apiUrl)
      .get()
      .json(json=> {
        
         clearTimeout(timeout);
         if(!didTimeOut) {
             dispatch(getLexicon(json, lexiconId));
             resolve(json);
         }
      })
      .catch(error=>{console.log('error in lexicon api')});
    })
   
  };

  export const resetLexiconByLexiconId=()=> (dispatch, getState)=>{
    var state = getState();
      return  dispatch(resetLexicon(state.lexiconById)) 
      //return dispatch(resetUnit());
  }