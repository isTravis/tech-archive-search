import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const propTypes = {
	initialInput: PropTypes.string,
	history: PropTypes.object.isRequired,
};

const defaultProps = {
	initialInput: ''
};

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: props.initialInput,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({ input: evt.target.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.history.push(`/search?q=${this.state.input}`);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type={'text'}
					placeholder={'Search...'}
					onChange={this.handleChange}
					value={this.state.input}
				/>
			</form>
		);
	}
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
export default withRouter(SearchBar);
