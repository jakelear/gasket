import { CLEAR_SELECTED_APP, SELECT_APP } from '../../constants/actions';

export default function (id) {
  return async (dispatch) => {
    dispatch({ id, type: SELECT_APP });
  };
}
