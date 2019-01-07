import React from 'react';

import MemberDashboard from '../Components/memberHeader';

function ViewAllWords(){
	return(
		<React.Fragment>
			<MemberDashboard />
				<div className="site-article-container">
					<h2>Total no. of word:23</h2>
					<div className='flex-row alphabet-row '>
						<div className='alphabet-word-card'>
							<h4>A</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>B</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>C</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>D</h4>
							<hr />
						</div>
					</div>
					<div className='flex-row alphabet-row '>
						<div className='alphabet-word-card'>
							<h4>E</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>F</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>G</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>H</h4>
							<hr />
						</div>
					</div>
					<div className='flex-row alphabet-row '>
						<div className='alphabet-word-card'>
							<h4>I</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>J</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>K</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>L</h4>
							<hr />
						</div>
					</div>
					<div className='flex-row alphabet-row '>
						<div className='alphabet-word-card'>
							<h4>M</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>N</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>O</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>P</h4>
							<hr />
						</div>
					</div>
					<div className='flex-row alphabet-row '>
						<div className='alphabet-word-card'>
							<h4>Q</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>R</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>S</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>T</h4>
							<hr />
						</div>
					</div>
					<div className='flex-row alphabet-row '>
						<div className='alphabet-word-card'>
							<h4>U</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>V</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>W</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>X</h4>
							<hr />
						</div>
					</div>
					<div className='flex-row alphabet-row '>
						<div className='alphabet-word-card'>
							<h4>Y</h4>
							<hr />
						</div>
						<div className='alphabet-word-card'>
							<h4>Z</h4>
							<hr />
						</div>						
					</div>
				</div>
		</React.Fragment>
	)
}

export default ViewAllWords;