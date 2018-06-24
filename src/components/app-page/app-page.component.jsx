import React from 'react';
// import styles from './app-page.module.scss';

export default class AppPage extends React.Component {

  render () {
    return (
      <h1>App Id: {this.props.match.params.id}</h1>
    );
  }
}
