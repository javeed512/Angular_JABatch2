var ArrayDemo = /** @class */ (function () {
    function ArrayDemo() {
        this.ar1 = [2, 4, 6, 8, 10];
        this.list = ["king", "smith", "ford", "javeed"];
    }
    ArrayDemo.prototype.display = function () {
        for (var i = 0; i < this.ar1.length; i++) {
            console.log(this.ar1[i]);
        }
        console.log("using foreach method with callback fnc");
        this.ar1.forEach(function (n1) { console.log(n1); });
    };
    ArrayDemo.prototype.displayList = function () {
        console.log('displayList');
        this.list.filter(function (name) { return name.length > 4; }).forEach(function (name) { console.log(name); });
    };
    ArrayDemo.prototype.tuple = function () {
        this.data = [101, 'raju'];
        console.log(this.data);
        console.log(this.data[1]);
    };
    ArrayDemo.prototype.anyType = function () {
        this.result = new Array();
        console.log(this.result);
        this.result = new String();
        console.log(this.result);
        this.result = 99;
        console.log(this.result);
    };
    return ArrayDemo;
}());
new ArrayDemo().display();
var obj = new ArrayDemo();
obj.displayList();
obj.tuple();
obj.anyType();
