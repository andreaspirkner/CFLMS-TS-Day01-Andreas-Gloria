class Person { // ①
   firstName = ""; // ② 
   lastName = ""; // ②    
constructor(firstName, lastName) { // ③
       this.firstName = firstName;
       this.lastName = lastName;
   }
   name() { // ④
       return `My name is ${this .firstName} ${this.lastName}`;
   }
   whoAreYou() { // ④
       return `Hi , ${this .name()}`; // ⑤
   }
}
let fullName = new Person("Mario", "Nelson");

console.log(fullName.name());
//My name is Mario Nelson

console.log(fullName.whoAreYou());
// "Hi , My name is Mario Nelson
//_______________________________________________________
class Student extends Person { // ①
   course; // ② 

   constructor(firstName, lastName, course) {
       super(firstName, lastName); // ③ 
        this.course = course;
   }

   whoAreYou() { // ④
       return  `${super.whoAreYou()} and i'm studying ${this.course}`; // ⑤
   }
}
let student = new Student("Mario", "Nelson", "Angular 6");
console.log(student.whoAreYou());
// Hi i'm Mario Nelson and i'm studying Angular 2