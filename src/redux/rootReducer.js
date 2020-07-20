import { combineReducers } from 'redux'
//All reducers
import videoReducer from './reducers/videoReducer'
import userReducer from './reducers/userReducer'
import currentVideoState from './reducers/currentVideoReducer'
const rootReducer = combineReducers({
    videoState: videoReducer,
    userState: userReducer,
    currentVideoState: currentVideoState
})

export default rootReducer;