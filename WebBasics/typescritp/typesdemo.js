var Demo = /** @class */ (function () {
    function Demo() {
        this.name = "javeed";
        this.salary = 90000;
        this.isValid = true;
        this.doj = new Date();
        this.city = new String("Hyderabad");
    }
    Demo.prototype.getData = function () {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.isValid);
        console.log(this.doj);
        console.log(this.city);
        return "thank u";
    };
    return Demo;
}());
var d = new Demo();
d.getData();
