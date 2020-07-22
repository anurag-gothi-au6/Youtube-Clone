import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTrendingVideos } from "../redux/actions/videoActions";
import Videos from "../components/Videos";
class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTrendingVideos();
  }

  render() {
    return !this.props.user ? (
      <Redirect to="/login" />
    ) : (
      <div>
        <Videos />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps, { fetchTrendingVideos })(HomePage);
