import { SET_PLAYLIST, TOGGLE_PLAYLIST_FETCHING_STATE } from '../actionTypes'
import axios from 'axios'
import config from '../../config'

export const fetchPlaylist = () => async (disptach, getState) => {
    try {
        const accessToken = getState().userState.user.access_token
        console.log(accessToken)
        disptach({ type: TOGGLE_PLAYLIST_FETCHING_STATE })
        disptach({ type: SET_PLAYLIST, payload: null })
        let { data } = await axios(`${config.BASE_URL}/playlists?mine=true&key=${config.API_KEY}&part=snippet`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        console.log(data)

        disptach({ type: SET_PLAYLIST, payload: data })
    }
    catch (err) {
        console.log(err)
    }
    finally {
        disptach({ type: TOGGLE_PLAYLIST_FETCHING_STATE })
    }
}