export const storageService = {
    store,
    load
}

function store(key, any) {
    localStorage[key] = JSON.stringify(any)
}

function load(key) {
    var str = localStorage[key] || 'null'
    if (str === 'undefined') return false
    else return JSON.parse(str);
}

