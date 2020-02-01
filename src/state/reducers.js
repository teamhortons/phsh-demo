import { combineReducers } from 'redux';
import { reducer as PhshReducer } from './phsh';

export default combineReducers({
  phsh: PhshReducer,
});
