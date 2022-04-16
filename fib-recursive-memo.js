const perf = require('./perf');
const memo = require('./memo');
const { testEqual } = require('./test');

const fib = memo(function (n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
})

const fibWithMemo = perf(fib);

testEqual('Should return 0, when n is 0', () => fibWithMemo(0) === 0);

testEqual('Should return 1, when n is 1', () => fibWithMemo(1) === 1);

testEqual('Should return 1, when n is 2', () => fibWithMemo(2) === 1);

testEqual('Should return 2, when n is 3', () => fibWithMemo(3) === 2);

testEqual('Should return 102334155, when n is 40', () => fibWithMemo(40) === 102334155);
