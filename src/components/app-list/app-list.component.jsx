import React from 'react';
import AppCard from '../app-card';

// import styles from './app-list.module.scss';

export default class AppList extends React.Component {

  componentDidMount () {
    this.props.getApps();
  }

  render() {
    return (
      <div>hrmph</div>
    )
  }
}