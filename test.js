const testEqual = (message, testMethod) => {
    if (testMethod()) {
        console.log(`pass: ${message}`)
    } else {
        console.log(`fail: ${message}`)
    }
}

module.exports = {
    testEqual
}