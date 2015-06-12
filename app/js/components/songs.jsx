'use strict';

var SONGS = require('../../testMusic');
var React = require('react');
var request = require('superagent');

var SongArtist = React.createClass({
	render: function() {
		return (<tr><th colSpan="2">{this.props.artist}</th></tr>);
	}
});

var SongData = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.song.title}</td>
				<td>{this.props.song.album}</td>
				<td>{this.props.song.release}</td>
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
				<input type="text" placeholder="Search..." />
				<br/>
			</form>
		);
	}
});

var ArtistSearch = React.createClass({
	getInitialState: function() {
		return {songs: [], title: "Songs :"};
	},

	componentDidMount: function() {
		request
			.get('/api/songs')
			.end(function(err, res) {
				if (err) console.log(err);
				this.setState({songs: res.body})
				this.props.songs = this.state.songs;
			}.bind(this));

	},

	render: function() {
		//console.log(this.props.songs);
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
