import { GET_DATA_FILES, GET_DATA_MESSAGES, GET_DATA_ERROR, SET_USER } from '../actions/actions.js'

const initialState = {
    messages: [],
    files: [],
    user: {
        email: '',
        token: ''
    }
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case GET_DATA_FILES:
            return {
                ...state,
                files: action.payload
            }
        case GET_DATA_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case GET_DATA_ERROR:
            return {
                ...state
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return initialState;

    }


}