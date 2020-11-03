import {ACTIONTYPES} from '../../configurations/actiontypes'
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

const INITIAL_STATE = {lession:{},  error: null, loading: false,[DEFAULT_KEY]: null};

export default function(state = INITIAL_STATE, action) {
   
    switch(action.type) {
        case ACTIONTYPES.LESSIONS.GET_LESSIONS_BY_CLASSNO_SUBJECT_LESSIONID:
           var updatedState = { ...state, lession: action.payload,[DEFAULT_KEY]: generateCacheTTL()};
          updatedState[action.lessionByLessionId+"_time"]=generateCacheTTL();
          updatedState[action.lessionByLessionId]=action.payload;
          updatedState.lession=updatedState[action.lessionByLessionId];
          return updatedState;
        case ACTIONTYPES.LESSIONS.RESET_LESSIONS_BY_CLASSNO_SUBJECT_LESSIONID:
          //return INITIAL_STATE
          var updatedState = state;
            updatedState.lession = {};
          return updatedState;
        case ACTIONTYPES.LESSIONS.UPDATE_LESSIONS_BY_CLASSNO_SUBJECT_LESSIONID:
            var updatedState = state;
            updatedState.lession = updatedState[action.lessionByLessionId];
            return updatedState;      
      default:
      return state;
    }
  }