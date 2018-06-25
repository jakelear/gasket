import React from 'react';
// import styles from './app-page.module.scss';

export default class AppPage extends React.Component {

  componentDidMount () {
    this.props.getAppDetails(this.props.match.params.id);
  }

  get description () {
    return {__html: this.props.description};
  }

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p dangerouslySetInnerHTML={this.description} />
      </div>
    );
  }
}
