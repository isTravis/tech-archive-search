import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import qs from 'qs';
import dateFormat from 'dateformat';
import { getData } from 'actions/app';
import SearchBar from 'components/SearchBar/SearchBar';


const propTypes = {
	dispatch: PropTypes.func.isRequired,
	appData: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

class Search extends Component {
	componentWillMount() {
		const search = this.props.location.search || '?';
		const queryObject = qs.parse(search.slice(1, search.length));

		this.props.dispatch(getData(queryObject.q));
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.location.search !== nextProps.location.search) {
			const search = nextProps.location.search || '?';
			const queryObject = qs.parse(search.slice(1, search.length));

			this.props.dispatch(getData(queryObject.q));
		}
	}


	render() {
		const search = this.props.location.search || '?';
		const queryObject = qs.parse(search.slice(1, search.length));
		const appData = this.props.appData.appData || {};
		const records = appData.records || [];
		const items = records.map((record)=> {
			const properties = record._fields[0].properties;
			return {
				id: properties.pubId,
				title: properties.title,
				url: properties.url,
				description: properties.description || 'No Description',
				publicationDate: properties.publicationDate,
				uploadDate: properties.uploadDate,
				origin: properties.origin,
			};
		});

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
				{this.props.appData.loading &&
					<div id="app-loading">
						<div className="spinner">
							<div className="bounce1" />
							<div className="bounce2" />
							<div className="bounce3" />
						</div>
					</div>
				}
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-12'}>
							{appData === 'Error!' &&
								<h3>Error Loading Results</h3>
							}

							{!this.props.appData.loading && appData !== 'Error!' && items.length === 0 &&
								<h3>No Results</h3>
							}
							{items.map((item)=> {
								return (
									<div className={'result-container'} key={`result-${item.id}`}>
										<a href={item.url}>
											<div className={'result-title'}>{item.title}</div>
										</a>
										<div className={'result-url'}>{item.url}</div>
										<div className={'result-description'}>{item.description}</div>
										<div className={'result-meta'}>Publication Date: {dateFormat(new Date(Number(item.publicationDate)), 'mmmm dS, yyyy, h:MM:ss TT')}</div>
										<div className={'result-meta'}>Upload Date: {dateFormat(new Date(Number(item.uploadDate)), 'mmmm dS, yyyy, h:MM:ss TT')}</div>
										<div className={'result-meta'}>Origin: {item.origin}</div>
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
