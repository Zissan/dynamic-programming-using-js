const perf = require('./perf');

const testEqual = (message, testMethod) => {
    if (testMethod) {
        console.log(`pass: ${message}`)
    } else {
        console.log(`fail: ${message}`)
    }
}

const sumOfNNumbers = (...params) => {
    return params.reduce((acc, param) => acc + param, 0);
}

const testFunctionWithPerf = perf(sumOfNNumbers);

const params = Array.from({ length: 100 }).map((_, index) => index);

testEqual('Should return 4950', testFunctionWithPerf(...params) === 4950);