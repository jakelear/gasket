import { LOAD_APP_DETAILS } from '../constants/actions';

export default function (state = [], action) {
  if (action.type === LOAD_APP_DETAILS) {
    return action.data;
  }
  return state;
}
