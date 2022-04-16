const memo = (func, thisArg) => {
    const store = {};
    const generateKey = (params = []) => params.join('_')
    return (...args) => {
        const key = generateKey(args);
        if (store[key]) return store[key];
        store[key] = func.apply(thisArg, args);

        return store[key];
    }
}

module.exports = memo;