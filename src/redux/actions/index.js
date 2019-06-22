import { GET_DATA_FILES, GET_DATA_MESSAGES, GET_DATA_ERROR, SET_USER } from './actions'
import axios from 'axios'

export const setUser = (data) => {
    return dispatch => {
        try {
            dispatch({
                type: SET_USER,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR
            })

        }
    }
}


export const getDataFiles = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://192.168.100.15:3000/files')
            if (res.status === 201)
                dispatch({
                    type: GET_DATA_FILES,
                    payload: res.data
                })
            else {
                dispatch({
                    type: GET_DATA_ERROR
                })
            }
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR,
            })
        }
    }
}
export const getDataMessages = () => {
    return dispatch => {
        try {
            dispatch({
                type: GET_DATA_MESSAGES,
                payload: 'messages ok'
            })
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR,
            })
        }
    }
}