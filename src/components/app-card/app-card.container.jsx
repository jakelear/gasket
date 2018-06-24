import { connect } from 'react-redux';
import AppCard from './app-card.component';
import selectApp from '../../actions/select-app';

function mapState () {
  return {
  };
}

function mapDispatch (dispatch) {
return {
    selectApp: (id) => dispatch(selectApp(id)),
  };
}

export default connect(mapState, mapDispatch)(AppCard);
