var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = ""; // ② 
        this.lastName = ""; // ②    
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.name = function () {
        return "My name is " + this.firstName + " " + this.lastName;
    };
    Person.prototype.whoAreYou = function () {
        return "Hi , " + this.name(); // ⑤
    };
    return Person;
}());
var fullName = new Person("Mario", "Nelson");
//console.log(fullName.name());
//My name is Mario Nelson
//console.log(fullName.whoAreYou());
// "Hi , My name is Mario Nelson
//_______________________________________________________
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, age, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.age = age;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Student.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " and i'm  " + this.age + " years old and I work as a " + this.jobTitle + "."; // ⑤
    };
    return Student;
}(Person));
var student = new Student("Mario", "Nelson", "23", "Developer");
//console.log(student.whoAreYou());
document.getElementById("output").innerHTML = student.whoAreYou();
;
// Hi i'm Mario Nelson and i'm 23 years old and I work as a Developer
