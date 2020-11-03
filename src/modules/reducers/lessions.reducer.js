import {ACTIONTYPES} from '../../configurations/actiontypes'
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

const INITIAL_STATE = {lessions: {},lession:{},  error: null, loading: false,[DEFAULT_KEY]: null};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.LESSIONS.GET_LESSIONS_BY_CLASSNO_SUBJECT:
           var updatedState = { ...state, lessions: action.payload,[DEFAULT_KEY]: generateCacheTTL()};
          updatedState[action.classNoBySubject+"_time"]=generateCacheTTL();
          updatedState[action.classNoBySubject]=action.payload;
          updatedState.lessions=updatedState[action.classNoBySubject];
          return updatedState;
        case ACTIONTYPES.LESSIONS.RESET_LESSIONS_BY_CLASSNO_SUBJECT:
          //return INITIAL_STATE
          var updatedState = state;
            updatedState.lessions = {};
          return updatedState;
        case ACTIONTYPES.LESSIONS.UPDATE_LESSIONS_BY_CLASSNO_SUBJECT:
            var updatedState = state;
            updatedState.lessions = updatedState[action.classNoBySubject];
            return updatedState;
      default:
      return state;
    }
  }