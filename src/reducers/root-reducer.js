import { combineReducers } from 'redux';
import selectedApp from './selected-app';
import appDetails from './app-details';

const rootReducer = combineReducers({
  selectedApp,
  appDetails
});

export default rootReducer;
