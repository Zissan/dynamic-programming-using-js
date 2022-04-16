const perf = require('./perf');
const { testEqual } = require('./test');

const sumOfNNumbers = (params = []) => {
    return params.reduce((acc, param) => acc + param, 0);
}

const testFunctionWithPerf = perf(sumOfNNumbers);

const params = Array.from({ length: 10000000 }).map((_, index) => index);

testEqual('Should return 49999995000000', () => testFunctionWithPerf(params) === 49999995000000);