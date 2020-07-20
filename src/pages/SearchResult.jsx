import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSearchVideos } from "../redux/actions/videoActions";
import Videos from "../components/Videos";
import qs from 'qs'
class SearchResult extends Component {
  componentDidMount() {
    this.props.fetchSearchVideos(this.props.match.params.searchQuery);
  }
  componentDidUpdate(prevProps){
    const prevSearch = prevProps.match.params.searchQuery
    const prevQuery = qs.parse(prevProps.location.search)
    const newQuery = qs.parse(this.props.location.search)
    if(this.props.match.params.searchQuery!==prevSearch){
      this.props.fetchSearchVideos(this.props.match.params.searchQuery);
    }
    else if(newQuery!==prevQuery){
      this.props.fetchSearchVideos(this.props.match.params.searchQuery,newQuery['?q']);
    }
  }

  render() {
    return (
      <div>
        <Videos mode='search'/>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default withRouter(connect(mapStateToProps, { fetchSearchVideos })(SearchResult));
