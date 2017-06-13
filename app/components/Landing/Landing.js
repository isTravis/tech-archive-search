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
							<div>
								<img src={'images/cisco.png'} alt={'Cisco Logo'} />
								<img src={'images/banana.png'} alt={'Banana Logo'} />
								<img src={'images/dunder.jpg'} alt={'Dunder Logo'} />
								<Link to={'/join'}>
									<div className={'button'}>Add Your Organization</div>
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
						<p>Here, we can describe the tool and the project, as well as give more prompts for new organizations to join.</p>
						<p>Nunc porttitor mi dictum tincidunt viverra. Vestibulum luctus velit sit amet facilisis efficitur. Cras ullamcorper lectus nec ex efficitur porta. Quisque aliquam orci non sem porta, a facilisis nisl feugiat. Integer porta, magna ac rutrum fringilla, sem diam pretium ante, sed consectetur eros neque at tortor. Phasellus vitae mauris in ipsum tincidunt venenatis. Fusce interdum mauris mi, ut finibus ante tempus quis. Mauris efficitur mattis accumsan. </p>
						<p>Nulla quis ultrices urna. Praesent et arcu vulputate, consectetur justo ac, aliquet arcu. Aenean consectetur in odio at dapibus. Sed non est ut nulla laoreet placerat in a nisi. Nulla facilisi. Vivamus mi felis, ullamcorper a interdum a, consectetur vitae lectus. Sed et lectus a urna scelerisque rutrum. Aenean vitae dignissim sapien. Aliquam ac varius lacus. Aenean ut neque sed risus sagittis tempor vel vel massa. Sed elementum imperdiet viverra.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
