import React from 'react';
import AppCard from '../app-card';
import queryGraphQL from '../../api';
import debounce from 'lodash.debounce';

// import styles from './app-list.module.scss';

export default class AppList extends React.Component {
  constructor(props) {
    super(props);
    this.fetchApps = debounce(this.fetchApps, 1000);
  }

  state = {
    apps: [],
    filter: ''
  }

  handleFilter (value) {
    this.setState({filter: value});
    this.fetchApps();
  }

  async fetchApps () {
    const { filter } = this.state;
    const query = `
      {
        applist(filter: "${filter}") {
          apps {
            name
            appid
          }
        }
      }`;

    const serialize = (data) => {
      return data.applist.apps.map((app) => {
        return {
          ...app
        };
      });
    }

    if (filter.length > 2) {
      const response = await queryGraphQL({ query, serialize });
      this.setState({apps: response.data});
    } else {
      this.setState({apps: []});
    }
  }

  get appCards () {
    return this.state.apps
      .map((app) => {
        return (
          <AppCard key={app.appid} name={app.name} />
        );
      });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search for a game" value={this.state.filter} onChange={(e) => this.handleFilter(e.target.value)} />
        {this.appCards}
      </div>
    )
  }
}