import { connect } from 'react-redux';
import getAppDetails from '../../actions/get-app-details';
import AppPage from './app-page.component';

function mapState ({appDetails}) {
  return {
    name: appDetails.name,
    description: appDetails.detailed_description,
    screenshots: appDetails.screenshots,
    header_image: appDetails.header_image
  };
}

function mapDispatch (dispatch) {
  return {
    getAppDetails: (id) => {
      dispatch(getAppDetails(id))
    }
  };
}

export default connect(mapState, mapDispatch)(AppPage)