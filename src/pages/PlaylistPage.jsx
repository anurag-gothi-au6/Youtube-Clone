import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlaylist } from "../redux/actions/playlistActions";
import { Redirect } from "react-router-dom";

class PlaylistPage extends Component {
  componentDidMount() {
    this.props.fetchPlaylist();
  }
  render() {
    console.log(this.props.playlist);
    return this.props.user === null ? (
      <Redirect to="/login" />
    ) : this.props.playlist !== null ? (
      this.props.playlist.items.map((el) => (
        <div class="card" key={el.id}>
          <h5 class="card-header">Playlist</h5>
          <div class="card-body">
            <h5 class="card-title">{el.snippet.title}</h5>
            <p class="card-text">
            {el.snippet.description}
            </p>
            <button class="btn btn-primary">
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

export default connect(mapStateToProps, { fetchPlaylist })(PlaylistPage);
