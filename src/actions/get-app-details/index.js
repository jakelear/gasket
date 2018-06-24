import { ERROR, LOAD_APP_DETAILS } from '../../constants/actions';
import getAppDetails from './query';

export default function (id) {
  return async (dispatch) => {
    const { data, error } = await getAppDetails(id);
    console.log(data);
    if (error) {
      dispatch({ error, name: 'loadAppDetails', type: ERROR });
    } else {
      dispatch({ data, type: LOAD_APP_DETAILS });
    }
  };
}
