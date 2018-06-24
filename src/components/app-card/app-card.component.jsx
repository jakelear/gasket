import React from 'react';
import { Link } from 'react-router-dom';

// import styles from './app-card.module.scss';

export default class AppCard extends React.Component {

  showApp () {
    this.props.selectApp(this.props.appid);
  }

  render () {
    return (
      <div>
        <Link to={`/app/${this.props.appid}`} onClick={() => {this.showApp()}}>{ this.props.name }</Link>
      </div>
    );
  }
}
