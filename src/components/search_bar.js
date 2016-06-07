import React, { Component }from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};

	}

	render() {
		return (
			<div>
				<input
					value={this.state.term}
					onChange={(event) => this.onInputChange(event.target.value)}/>
				Value of input = {this.state.term}
			</div>
		);
	}

	//onInputChange = (event) => this.setState({term: event.target.value});
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
