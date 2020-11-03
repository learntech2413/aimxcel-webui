import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import lessionsBySubject from './reducers/lessions.reducer';
import lessionsBySubjectndLessionId from './reducers/concepts.reducer'
import lexiconById from './reducers/lexicon.reducer';
import questionsByCriticalThinkingId from './reducers/critical-thinking.reducer';
import { loadingBarReducer } from 'react-redux-loading-bar'
export default combineReducers({
  auth,
  profile,
  lessionsBySubject,
  lessionsBySubjectndLessionId,
  lexiconById,
  questionsByCriticalThinkingId,
  loadingBar: loadingBarReducer
});
