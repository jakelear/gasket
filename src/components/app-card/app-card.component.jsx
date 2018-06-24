import React from 'react';
// import styles from './app-card.module.scss';

export default class AppCard extends React.Component {
  render () {
    return (
      <h1>{ this.props.name }</h1>
    );
  }
}
