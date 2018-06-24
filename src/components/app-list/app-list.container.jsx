import { connect } from 'react-redux';
import getApps from '../../actions/get-apps';
import AppList from './app-list.component';

function mapState () {
  return {
  };
}

function mapDispatch (dispatch) {
  return {
    getApps: () => dispatch(getApps())
  };
}

export default connect(mapState, mapDispatch)(AppList);