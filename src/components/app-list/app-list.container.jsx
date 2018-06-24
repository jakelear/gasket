import { connect } from 'react-redux';
import getApps from '../../actions/get-apps';
import AppList from './app-list.component';

function mapState ({ apps }) {
  return {
    apps,
  };
}
function mapDispatch (dispatch) {
  return {
    getApps: (filter) => {
      dispatch(getApps(filter))
    }
  };
}

export default connect(mapState, mapDispatch)(AppList);