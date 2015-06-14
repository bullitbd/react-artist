'use strict';

//var SONGS = require('../../testMusic');
var React = require('react');
var request = require('superagent');
var artistComp = require('../object_compare');

var SongArtist = React.createClass({
	render: function() {
		return (<tr><th colSpan="5" className="artistTitle">{this.props.artist}</th></tr>);
	}
});

var SongData = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.song.title}</td>
				<td>{this.props.song.album}</td>
				<td>{this.props.song.release}</td>
				<td>{this.props.song.label}</td>
				<td>{this.props.song.genre}</td>
			</tr>
		)
	}
});

var SongInfo = React.createClass({
	render: function() {
		var rows = [];
		var lastArtist = null;

		this.props.songs.forEach(function(song) {
			if (song.artist !== lastArtist) {
        rows.push(<SongArtist artist={song.artist} key={song.artist} />);
    	}
      rows.push(<SongData song={song} key={song._id} />);
      lastArtist = song.artist;
  	});
		return (
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Album</th>
						<th>Released</th>
						<th>Label</th>
						<th>Genre</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
});

var SearchBar = React.createClass({
	render: function() {
		return (
			<form>
				<label className="title" for="searchbox"><strong>SONGS</strong></label>
				<input className="searchbox" type="text" placeholder="Search..." />
				<br/>
			</form>
		);
	}
});

var ArtistSearch = React.createClass({
	getInitialState: function() {
		return {songs: []};
	},

	componentWillMount: function() {
		request
			.get('/api/songs')
			.end(function(err, res) {
				if (err) console.log(err);
				res.body.sort(artistComp);
				this.setState({songs: res.body})
			}.bind(this));

	},

	render: function() {
		return (
			<div>
				<SearchBar />
				<br />
				<SongInfo songs={this.state.songs} />
			</div>
		);
	}
});


React.render(<ArtistSearch />, document.body);
