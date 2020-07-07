import {
    GET_EVENT_SUCCESS,
    GET_EVENT_FAILURE,
    GET_EVENT_REQUEST
} from '../actions/actions';

const initialState = {
    message: "",
    error: null,
    loading: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_EVENT_REQUEST:
            return {
                loading: true,
                error: null,
                message: ""
            };
        case GET_EVENT_SUCCESS:
            return {
                loading: false,
                error: null,
                message: action.payload,
                events: action.payload.data
            };
        case GET_EVENT_FAILURE:
            return {
                loading: false,
                error: action.payload,
                message: ""
            };
        default:
            return state;
    }
}

