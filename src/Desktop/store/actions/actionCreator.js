import {
    SHOW_ALERT,
    HIDE_ALERT,
    SHOW_PAGE_LOADER,
    HIDE_PAGE_LOADER,
    SHOW_CONTENT_LOADER,
    HIDE_CONTENT_LOADER,
} from "./constants";

export const showPageLoader = () => ({ type: SHOW_PAGE_LOADER });
export const hidePageLoader = () => ({ type: HIDE_PAGE_LOADER });
export const showContentLoader = () => ({ type: SHOW_CONTENT_LOADER });
export const hideContentLoader = () => ({type: HIDE_CONTENT_LOADER});
export const showAlert = (payload) => ({ type: SHOW_ALERT, payload });
export const hideAlert = () => ({type: HIDE_ALERT});
