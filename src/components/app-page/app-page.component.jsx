import React from 'react';
// import styles from './app-page.module.scss';

export default class AppPage extends React.Component {

  componentDidMount () {
    this.props.getAppDetails(this.props.match.params.id);
  }

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
