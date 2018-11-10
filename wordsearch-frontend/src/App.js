import React, { Component } from 'react';


import './scss/base_styles.scss';
import './scss/article_styles.scss';

import Header from './components/header'
import Routes from './routes';

import ElementOfStory from './components/ElementsOfStory'
import SearchEnterWord from './components/SearchEnterWord'

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Header />
      <div className="article-container flex-row">
        <div className='article-left-section'>
          <ElementOfStory />
        </div>  
        <div className='article-right-section'>
          <Routes />
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
