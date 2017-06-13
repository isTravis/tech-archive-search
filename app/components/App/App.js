import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import Async from 'react-code-splitting';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

require('./app.scss');

const Landing = () => <Async load={import('components/Landing/Landing')} />;
const NoMatch = () => <Async load={import('components/NoMatch/NoMatch')} />;
const Search = () => <Async load={import('components/Search/Search')} />;
const Join = () => <Async load={import('components/Join/Join')} />;

const propTypes = {
	location: PropTypes.object.isRequired,
};


const App = function({ location }) {
	return (
		<div>
			<Helmet>
				<title>Tech Archive Search</title>
				<meta name="description" content="Tech Archive Search Tool" />
			</Helmet>

			{location.pathname !== '/' &&
				<Nav />
			}

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={Search} />
				<Route path="/join" component={Join} />
				<Route path="/*" component={NoMatch} />
			</Switch>

			<Footer />
		</div>
	);
};

App.propTypes = propTypes;

export default withRouter(App);
