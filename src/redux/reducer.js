import { ONLINE } from './action';

const initialState = {
    online: false
}

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONLINE:
            return { ...state, online: action.payload }
        default:
            return state;
    }
}

export default statusReducer;