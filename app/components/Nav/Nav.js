import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
	return (
		<nav className="navbar-page">
			<div className={'navbar'}>
				<Link to={'/'}>Tech Archive Search</Link>
			</div>
		</nav>
	);
};

export default NavBar;
