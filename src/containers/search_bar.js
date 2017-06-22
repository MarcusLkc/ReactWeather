import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: 'Texas'};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.props.fetchWeather(this.state.term);
	}

	onInputChange(event) {

		
		this.setState({term: event.target.value});
	}

	onFormSubmit (event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: ''});

	}



	render() {
		return (

			<form name="theform" onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" id="form1" className="btn btn-secondary">Submit </button>
				</span>
			</form>

			);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);



