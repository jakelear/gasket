import { SELECT_APP } from '../../constants/actions';

export default function (id) {
  return async (dispatch) => {
    dispatch({ id, type: SELECT_APP });
  };
}
