import React, { Component } from 'react';

import './scss/base_styles.scss';
import './scss/article_styles.scss';

import Routes from './routes';

import ElementOfStory from './components/ElementsOfStory'
import SearchEnterWord from './components/SearchEnterWord'

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Routes />
      </React.Fragment>
    );
  }
}

export default App;
