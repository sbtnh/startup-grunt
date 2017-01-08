const props = {};

export function get(key) {
    return getAll()[key];
}

export function getAll() {
    return Object.assign({}, props);
}

export function set(key, val) {
    if(typeof key === 'object') {
        Object.assign(props, key);
    }
    else {
        props[key] = val;
    }
}
