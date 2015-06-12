'use strict';

var React = require('react');

module.exports = React.createClass({
	handleSubmit: function(event) }
		this.setState({note: this.props.save(this.state.note)});
	};

	handleChange: function(event) {
		var noteCopy = this.state.note; //noteCopy is reference to this.state.note
		
		noteCopy[event.target.name] = event.target.value;
		this.setState({note: noteCopy});
	};
	getInitialState: function() {
		return {note: {noteBody: ''}};
			<form name="note-form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
				<label for="noteBody">{this.props.labelText}</label>
				<input name="noteBody" type="text" value="{this.state.note.noteBody}/>
				<button type="submit>{this.props.buttonText}</button>
			</form>
		);
	}
});
//stopped at about 1:40