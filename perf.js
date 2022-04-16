const perf = (func, thisArg) => {
    return (...params) => {
        const startTime = +(new Date());
        console.log('***PROCESS STARTED***');
        const result = func.apply(thisArg, params);
        const endTime = +(new Date());
        console.log('***PROCESS COMPLETED***');
        console.log(`EXECUTION TIME: ${endTime - startTime} ms`);
        return result;
    }
}

module.exports = perf