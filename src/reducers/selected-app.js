import { SELECT_APP } from '../constants/actions';

export default function (state = [], action) {
  if (action.type === SELECT_APP) {
    return action.id ? parseInt(action.id, 10) : null;
  }
  return state;
}