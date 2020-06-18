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

//console.log(fullName.name());
//My name is Mario Nelson

//console.log(fullName.whoAreYou());
// "Hi , My name is Mario Nelson
//_______________________________________________________
class Student extends Person { // ①
   age; // ②
   jobTitle;

   constructor(firstName, lastName, age, jobTitle) {
       super(firstName, lastName); // ③ 
        this.age = age;
        this.jobTitle = jobTitle
   }

   whoAreYou() { // ④
       return  `${super.whoAreYou()} and i'm  ${this.age} years old and I work as a ${this.jobTitle}.`; // ⑤
   }
}
let student = new Student("Mario", "Nelson", "23", "Developer");
//console.log(student.whoAreYou());
document.getElementById("output").innerHTML = student.whoAreYou());
// Hi i'm Mario Nelson and i'm 23 years old and I work as a Developer