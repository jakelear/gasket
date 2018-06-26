import React from 'react';
import { Link } from 'react-router-dom';
import styles from './app-card.module.scss';

export default class AppCard extends React.Component {

  showApp () {
    this.props.selectApp(this.props.appid);
  }

  get appName () {
    return {__html: this.props.name};
  }

  render () {
    return (
      <div className={styles.appCard}>
        <Link className={styles.appLink} to={`/app/${this.props.appid}`} onClick={() => {this.showApp()}} dangerouslySetInnerHTML={this.appName} />
      </div>
    );
  }
}
