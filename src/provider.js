import React from 'react';
import axios from 'axios';

import config from './constants/config';


class AppProvider extends React.Component {
  componentWillMount() {
    // base API host
    axios.defaults.baseURL = config.API_URL;
    // add trailing slash to the end of endpoint
    axios.interceptors.request.use((settings) => {
      if (settings.url[settings.url.length - 1] !== '/') {
        return { ...settings, url: `${settings.url}/` };
      }
      return settings;
    });
  }
  render() {
    return React.Children.only(this.props.children);
  }
}

export default AppProvider;
