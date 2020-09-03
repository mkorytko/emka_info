import {
    HIDE_ALERT,
    SHOW_ALERT,
    SHOW_PAGE_LOADER,
    HIDE_PAGE_LOADER,
    SHOW_CONTENT_LOADER,
    HIDE_CONTENT_LOADER,
} from "../actions/constants";

const initialState = {
    alert: null,
    pageLoader: false,
    contentLoader: false,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SHOW_PAGE_LOADER:
            return {...state, pageLoader: true };
        case HIDE_PAGE_LOADER:
            return {...state, pageLoader: false };
        case SHOW_CONTENT_LOADER:
            return {...state, contentLoader: true };
        case HIDE_CONTENT_LOADER:
            return {...state, contentLoader: false };
        case SHOW_ALERT:
            return {...state, alert: action.payload };
        case HIDE_ALERT:
            return {...state, alert: null };
        default:
            return state;
    }
}
