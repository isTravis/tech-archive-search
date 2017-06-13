import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';

const Landing = function() {
	return (
		<div id={'landing-page'}>
			<div className={'landing-top'}>
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-12'}>
							<h1>Tech Archive Search</h1>
							<SearchBar />
						</div>
						<div className={'col-12 logos-container'}>
							<h2>Participating Organizations</h2>
							<div>
								<img src={'images/cisco.png'} alt={'Cisco Logo'} />
								<img src={'images/banana.png'} alt={'Banana Logo'} />
								<img src={'images/dunder.jpg'} alt={'Dunder Logo'} />
								<Link to={'/join'}>
									<button>Join</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<h2>An open tool for prior art search</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
