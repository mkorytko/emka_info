import { showAlert } from "../actions/actionCreator";

const badWords = ["fuck"];

// export function checkPostWordFirst({ dispatch }) {
//     return function (next) {
//         return function(action) {
//             if (action.type === SET_POSTS) {
//                 const str = action.payload;
//                 const reg = new RegExp("fuck");
//                 if (reg.test(str)) {
//                     return dispatch(showAlert("Не корректный пост."));
//                 }
//             }
//             return next(action);
//         }
//     }
// }

export function loggerMiddleware({ getState }) {
    // console.log(getState());
    return next => action => {
        return next(action);
    }
}
