import React, { Component } from 'react';

import '../scss/base_styles.scss';
import '../scss/article_styles.scss';

import Header from './header';
import ElementOfStory from './ElementsOfStory';
import Routes from '../routes';



class PublicDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="article-container flex-row">
          <div className='article-left-section'>
            <ElementOfStory />
          </div>  
          <div className='article-right-section'>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PublicDashboard;