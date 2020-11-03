import {ACTIONTYPES} from '../../configurations/actiontypes'
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

const INITIAL_STATE = {questions: {},  error: null, loading: false,[DEFAULT_KEY]: null};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.CRITICAL_THINKING.GET_CRITICAL_THINKING_BY_CRITICAL_THINKING_ID:
           var updatedState = { ...state, questions: action.payload,[DEFAULT_KEY]: generateCacheTTL()};
          updatedState[action.criticalThinkingId+"_time"]=generateCacheTTL();
          updatedState[action.criticalThinkingId]=action.payload;
          updatedState.questions=updatedState[action.criticalThinkingId];
          return updatedState;
        case ACTIONTYPES.CRITICAL_THINKING.RESET_CRITICAL_THINKING_BY_CRITICAL_THINKING_ID:
          //return INITIAL_STATE
          var updatedState = state;
            updatedState.questions = {};
          return updatedState;
        case ACTIONTYPES.CRITICAL_THINKING.UPDATE_CRITICAL_THINKING_BY_CRITICAL_THINKING_ID:
            var updatedState = state;
            updatedState.questions = updatedState[action.criticalThinkingId];
            return updatedState;
      default:
      return state;
    }
  }