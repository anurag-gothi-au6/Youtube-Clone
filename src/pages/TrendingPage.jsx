import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTrendingVideos } from "../redux/actions/videoActions";
import Videos from "../components/Videos";
class TrendingPage extends Component {
  componentDidMount() {
    this.props.fetchTrendingVideos();
  }

  render() {
    return(
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

export default connect(mapStateToProps, { fetchTrendingVideos })(TrendingPage);
