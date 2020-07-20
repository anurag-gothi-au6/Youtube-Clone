import React from "react";
import VideoListItem from "./VideoListItem";
import { CardDeck } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const Videos = ({ videos,mode='trending',history}) => {
  const handleNextPage = (e)=>{
    history.push({search:`?q=${e.target.name}`})
  }
  return (
    <>
    <CardDeck style={{marginRight:'auto'}}>
      {videos!==null ? videos.items.map((video) => (
        <VideoListItem key={mode==='search'?(`/videos/${video.id.videoId}`):(`/videos/${video.id}`)} video={video} mode={mode} />
      )) : <div className="loader">Loading...</div>}
    </CardDeck>
    {videos===null?'':mode!=='search'?'':videos.prevPageToken? (<button style={{borderRadius:'50%'}} name={videos.prevPageToken} onClick={handleNextPage}>←</button>):''}

  {videos===null?'':mode!=='search'?'':videos.nextPageToken!==0 ? (<button style={{borderRadius:'50%'}} name={videos.nextPageToken} onClick={handleNextPage}>→</button>):''}
    </>
  );
};

const mapStateToProps = storeState =>{
    return {
        videos: storeState.videoState.videos
    }
}
export default withRouter(connect(mapStateToProps)(Videos));
