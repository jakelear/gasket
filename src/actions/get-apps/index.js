import { ERROR, LOAD_APPS } from '../../constants/actions';
import getApps from './query';

export default function (filter) {
  return async (dispatch) => {
    const { data, error } = await getApps(filter);

    if (error) {
      dispatch({ error, name: 'loadApps', type: ERROR });
    } else {
      dispatch({ data, type: LOAD_APPS });
    }
  };
}
