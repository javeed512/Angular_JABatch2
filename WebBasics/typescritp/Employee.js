"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    //     eid:number ;
    // ename:string;
    // doj:Date;
    //  constructor(eid,ename,doj){
    //        this.eid = eid;
    //        this.ename = ename;
    //        this.doj = doj; 
    //  }
    function Employee(eid, ename, doj) {
        this.eid = eid;
        this.ename = ename;
        this.doj = doj;
        this.student1.sid = 111;
        this.student1.sname = 'tom';
    }
    Employee.prototype.display = function () {
        console.log(this.eid + "   " + this.ename + " " + this.doj);
        console.log(this.student1.sid + "  " + this.student1.sname);
    };
    return Employee;
}());
var e1 = new Employee(101, 'javeed', new Date());
e1.display();
console.log(e1);
