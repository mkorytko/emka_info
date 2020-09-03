window.onunhandledrejection = function(a) {
    console.warn(a.reason.message)
    return false;
};

// window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
//     console.warn(errorMsg, url, lineNumber);
// }
