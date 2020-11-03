import {ACTIONTYPES} from '../../configurations/actiontypes'
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

const INITIAL_STATE = {lexicon: {},  error: null, loading: false,[DEFAULT_KEY]: null};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.LEXICON.GET_LEXICON_BY_LEXICON_ID:
           var updatedState = { ...state, lexicon: action.payload,[DEFAULT_KEY]: generateCacheTTL()};
          updatedState[action.lexiconId+"_time"]=generateCacheTTL();
          updatedState[action.lexiconId]=action.payload;
          updatedState.lexicon=updatedState[action.lexiconId];
          return updatedState;
        case ACTIONTYPES.LEXICON.RESET_LEXICON_BY_LEXICON_ID:
          //return INITIAL_STATE
          var updatedState = state;
            updatedState.lexicon = {};
          return updatedState;
        case ACTIONTYPES.LEXICON.UPDATE_LEXICON_BY_LEXICON_ID:
            var updatedState = state;
            updatedState.lexicon = updatedState[action.lexiconId];
            return updatedState;
      default:
      return state;
    }
  }