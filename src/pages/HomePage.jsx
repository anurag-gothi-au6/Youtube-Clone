import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHomeVideos } from "../redux/actions/videoActions";
import Videos from "../components/Videos";
class HomePage extends Component {
  componentDidMount() {
    this.props.fetchHomeVideos();
  }

  render() {
    return (
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

export default connect(mapStateToProps, { fetchHomeVideos })(HomePage);
