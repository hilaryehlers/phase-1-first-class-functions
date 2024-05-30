function receivesAFunction(cb) {
console.log(cb());
}
receivesAFunction(function () { return "spy"});

function returnsANamedFunction() {
    function namedFunction() {

    }
return namedFunction;
}

function returnsAnAnonymousFunction() {
    function anonymousFunction() {
    }
return function() {
    console.log("");
}
    }
