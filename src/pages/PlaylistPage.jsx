import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchPlaylist} from '../redux/actions/playlistActions'
import { Redirect } from "react-router-dom";

class PlaylistPage extends Component {
    componentDidMount(){
        this.props.fetchPlaylist()
    }
    render() {
        console.log(this.props.playlist)
        return(
        this.props.user===null?(<Redirect to='/login' />):
        this.props.playlist!==null?(
            <div>
                {JSON.stringify(this.props.playlist)}
            </div>
        ):<div className="loader">loading...</div>
        )
    }
}
 
const mapStateToProps = (storeState)=>{
    return {
        playlist: storeState.playlistState.playlist,
        user: storeState.userState.user
    }
}

export default connect(mapStateToProps,{fetchPlaylist})(PlaylistPage)
