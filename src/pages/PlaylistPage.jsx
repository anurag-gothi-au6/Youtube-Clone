import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlaylist } from "../redux/actions/playlistActions";
// import { Redirect } from "react-router-dom";

class PlaylistPage extends Component {
  componentDidMount() {
    this.props.fetchPlaylist();
  }
  render() { 
    return this.props.playlist !== null ? (
      this.props.playlist.items.map((el) => (
        <div className="card" key={el.id}>
          <h5 className="card-header">Playlist</h5>
          <div className="card-body">
            <img src={el.snippet.thumbnails.medium.url} alt='PlaylistImage'></img>
            <h5 className="card-title">{el.snippet.title}</h5>
            <p className="card-text">
            {el.snippet.description}
            </p>
            <button className="btn btn-primary">
              Play Playlist
            </button>
          </div>
        </div>
      ))
    ) : (
      // <div>
      //     {JSON.stringify(this.props.playlist)}
      // </div>
      <div className="loader">loading...</div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    playlist: storeState.playlistState.playlist,
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps, { fetchPlaylist })(PlaylistPage)
