import { SET_VIDEOS, TOGGLE_VIDEO_FETCHING_STATE } from '../actionTypes'
import axios from 'axios'
import config from '../../config'
export const fetchTrendingVideos = (pageToken = "") => async disptach => {
    try {
        disptach({ type: TOGGLE_VIDEO_FETCHING_STATE })
        disptach({ type: SET_VIDEOS, payload: null })
        let { data } = await axios(`${config.BASE_URL}/videos?part=snippet&key=${config.API_KEY}&regionCode=In&chart=mostPopular&maxResults=30${
            pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
            }`
        )
        const chnlId = []
        data.items.forEach(el => {
            chnlId.push(el.snippet.channelId)
        })
        const { data: pictures } = await axios(`${config.BASE_URL}/channels?part=snippet&id=${[chnlId]},items.id&key=${config.API_KEY}`)
        let chnlpic = []
        pictures.items.forEach(el => {
            chnlpic.push(el)
        })
        for (let i = 0; i < chnlpic.length; i++) {
            for (let j = 0; j < data.items.length; j++) {
                if (data.items[j].snippet.channelId === chnlpic[i].id) {
                    data.items[j].snippet.channelId = chnlpic[i].snippet.thumbnails.default.url
                    break
                }
            }
        }
        disptach({ type: SET_VIDEOS, payload: data })
    }
    catch (err) {
        console.log(err)
    }
    finally {
        disptach({ type: TOGGLE_VIDEO_FETCHING_STATE })
    }
}

export const fetchSearchVideos = (searchQuery, pageToken = "") => async disptach => {
    try {
        disptach({ type: TOGGLE_VIDEO_FETCHING_STATE })
        disptach({ type: SET_VIDEOS, payload: null })
        let { data } = await axios(`${config.BASE_URL}/search?q=${searchQuery}&type=video&part=snippet&key=${config.API_KEY}&regionCode=In&chart=mostPopular&maxResults=15${
            pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
            }`
        )
        const chnlId = []
        data.items.forEach(el => {
            chnlId.push(el.snippet.channelId)
        })
        const { data: pictures } = await axios(`${config.BASE_URL}/channels?part=snippet&id=${[chnlId]},items.id&key=${config.API_KEY}`)
        let chnlpic = []
        pictures.items.forEach(el => {
            chnlpic.push(el)
        })
        for (let i = 0; i < chnlpic.length; i++) {
            for (let j = 0; j < data.items.length; j++) {
                if (data.items[j].snippet.channelId === chnlpic[i].id) {
                    data.items[j].snippet.channelId = chnlpic[i].snippet.thumbnails.default.url
                    break
                }
            }
        }
        disptach({ type: SET_VIDEOS, payload: data })
    }
    catch (err) {
        console.log(err)
    }
    finally {
        disptach({ type: TOGGLE_VIDEO_FETCHING_STATE })
    }
}