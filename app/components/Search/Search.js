import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import qs from 'qs';
import { getData } from 'actions/app';
import SearchBar from 'components/SearchBar/SearchBar';


const propTypes = {
	dispatch: PropTypes.func.isRequired,
	appData: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

class Search extends Component {
	componentWillMount() {
		const location = this.props.location;
		const mode = 'pub';
		this.props.dispatch(getData(`${mode}?title=${location.search}`));
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.location.search !== nextProps.location.search) {
			const location = nextProps.location;
			const mode = 'pub';
			this.props.dispatch(getData(`${mode}?title=${location.search}`));
		}
	}


	render() {
		const search = this.props.location.search || '?';
		const queryObject = qs.parse(search.slice(1, search.length));

		const items = [
			{
				id: '01',
				title: 'The beginning of things',
				url: 'https://www.facething.whatever.com',
				description: 'The most important aspects of non-linear coagulation within rodents of sizes 10-15 is that the posterior lateral dorsal bone is in tact when realizing that of all the things I thought about yesterday, most of them were the type that kept me from eating ice cream - a dairy blend with sugar.',
				publicationDate: 'June 5, 2017',
				uploadDate: 'June 7, 2017',
			},
			{
				id: '02',
				title: 'The beginning of things',
				url: 'https://www.facething.whatever.com',
				description: 'The most important aspects of non-linear coagulation within rodents of sizes 10-15 is that the posterior lateral dorsal bone is in tact when realizing that of all the things I thought about yesterday, most of them were the type that kept me from eating ice cream - a dairy blend with sugar.',
				publicationDate: 'June 5, 2017',
				uploadDate: 'June 7, 2017',
			},
			{
				id: '03',
				title: 'The beginning of things',
				url: 'https://www.facething.whatever.com',
				description: 'The most important aspects of non-linear coagulation within rodents of sizes 10-15 is that the posterior lateral dorsal bone is in tact when realizing that of all the things I thought about yesterday, most of them were the type that kept me from eating ice cream - a dairy blend with sugar.',
				publicationDate: 'June 5, 2017',
				uploadDate: 'June 7, 2017',
			},
			{
				id: '04',
				title: 'The beginning of things',
				url: 'https://www.facething.whatever.com',
				description: 'The most important aspects of non-linear coagulation within rodents of sizes 10-15 is that the posterior lateral dorsal bone is in tact when realizing that of all the things I thought about yesterday, most of them were the type that kept me from eating ice cream - a dairy blend with sugar.',
				publicationDate: 'June 5, 2017',
				uploadDate: 'June 7, 2017',
			},

		];
		return (
			<div className={'search-page'}>
				<Helmet>
					<title>{queryObject.q} · Tech Archive</title>
				</Helmet>

				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-12'}>
							<SearchBar initialInput={queryObject.q || ''} />
						</div>
					</div>
				</div>
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-12'}>
							{items.map((item)=> {
								return (
									<div className={'result-container'} id={`result-${item.id}`}>
										<a href={item.url}>
											<div className={'result-title'}>{item.title}</div>
										</a>
										<div className={'result-url'}>{item.url}</div>
										<div className={'result-description'}>{item.description}</div>
										<div className={'result-meta'}>Publication Date: {item.publicationDate}</div>
										<div className={'result-meta'}>Upload Date: {item.uploadDate}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Search.propTypes = propTypes;
export default withRouter(connect(state => ({ appData: state.app }))(Search));
