export function substr(string, len = 10) {
    return string.substr(0, len) + "... ";
}

export function fileEx(file) {
    let reg, path;
    if (file.type) {
        reg = /\/(\w+)/gi;
        path = file.type;
    } else {
        reg = /\.(\w+)/gi;
        path = file.name;
    }
    const found = reg.exec(path);
    if (Array.isArray(found)) {
        return `.${found[1]}`;
    } else {
        return false;
    }
}
