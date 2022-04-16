const perf = require('./perf');
const { testEqual } = require('./test');

const fib = (n) => {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fibWithPerf = perf(fib);

testEqual('Should return 0, when n is 0', () => fibWithPerf(0) === 0);

testEqual('Should return 1, when n is 1', () => fibWithPerf(1) === 1);

testEqual('Should return 1, when n is 2', () => fibWithPerf(2) === 1);

testEqual('Should return 2, when n is 3', () => fibWithPerf(3) === 2);

testEqual('Should return 102334155, when n is 40', () => fibWithPerf(40) === 102334155);