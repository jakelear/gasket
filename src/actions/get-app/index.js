import { ERROR, LOAD_APP } from '../../constants/actions';
import getApps from './query';

export default function (filter) {
  return async (dispatch) => {
    const { data, error } = await getApps(filter);

    if (error) {
      dispatch({ error, name: 'loadApp', type: ERROR });
    } else {
      dispatch({ data, type: LOAD_APP });
    }
  };
}
