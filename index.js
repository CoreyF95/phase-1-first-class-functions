function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function returnsAFunction(){};
}

function returnsAnAnonymousFunction() {
    return function() {};
}

