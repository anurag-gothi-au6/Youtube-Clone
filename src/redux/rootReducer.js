import { combineReducers } from 'redux'
//All reducers
import videoReducer from './reducers/videoReducer'
import userReducer from './reducers/userReducer'
import currentVideoState from './reducers/currentVideoReducer'
import playlistReducer from './reducers/playlistReducer'

const rootReducer = combineReducers({
    videoState: videoReducer,
    userState: userReducer,
    currentVideoState: currentVideoState,
    playlistState:playlistReducer
})

export default rootReducer;