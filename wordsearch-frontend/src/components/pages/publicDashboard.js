import React, { Component } from 'react';

import Header from '../Components/header';
import SignupFormComponent from '../Components/signupformComponent';

import { landingpageInfoText } from '../../config/constants';

import '../../scss/base_styles.scss';
import '../../scss/article_styles.scss';
import '../../scss/pages_styles/landingpage.scss';

function LandingPageInfo(){
  return(
    <React.Fragment>
      <div className='infotext-container flex-column'>
        <div className='infotext-heading'>Welcome to <b>Word search - </b><span>Your online vocabulary journal</span></div>
      <p className='infotext-txt1'>{landingpageInfoText}</p>
      <p className='infotext-txt2'>Word Search allows user to:</p>
      <ul>
        <li>Save a word in the database</li>
        <li>View all the words in the database</li></ul>   
      </div></React.Fragment> )}

class PublicDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='site-article-container'>
          <div className='landingpage-console flex-row'>
            <div className='landingpage-console__info-section'>
              <LandingPageInfo /></div>
            <div className='landingpage__signup-console'><SignupFormComponent /></div>
          </div></div></React.Fragment>)}}

export default PublicDashboard;