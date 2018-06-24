import { LOAD_APPS } from '../constants/actions';

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_APPS:
      return [...state, ...action.data];
    default:
      return state;
  }
}
