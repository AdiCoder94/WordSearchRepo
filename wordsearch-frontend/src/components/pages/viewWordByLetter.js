import React from 'react';

import MemberHeader from "../Components/memberHeader";
import WordByLetterListComponent from "../Components/wordByLetterListComponent";
import WordInDetailComponent from "../Components/wordInDetailComponent";

function ViewWordByLetter(){
  return(
    <React.Fragment>
      <MemberHeader />
      <div className="site-article-container">
        <h2 className='section-heading'>Enter word in the database</h2>
        <hr />
        <div className='form-article-container flex-row'>
          <WordByLetterListComponent />
          <WordInDetailComponent /></div></div></React.Fragment>)}

export default ViewWordByLetter;
