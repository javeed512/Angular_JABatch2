var TypeAssertion = /** @class */ (function () {
    function TypeAssertion() {
    }
    TypeAssertion.prototype.get = function () {
        var someValue = "hello friends";
        console.log(someValue.length);
    };
    return TypeAssertion;
}());
new TypeAssertion().get();
