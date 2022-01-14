"use strict";

// Person Class

class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  // Getters

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  get age() {
    return this._age;
  }

  // Setters for Person

  set firstName(str) {
    typeof str === "string"
      ? (this._firstName = str)
      : console.log("Not a string");
  }
  set lastName(str) {
    typeof str === "string"
      ? (this._lastName = str)
      : console.log("Not a string");
  }
  set gender(str) {
    typeof str === "string"
      ? (this._gender = str)
      : console.log("Not a string");
  }
  set age(num) {
    typeof num === "number" ? (this._age = str) : console.log("Not a string");
  }
  // Methods

  toString() {
    return `${this._firstName} ${this._lastName}, ${this._age} years old.`;
  }
}

// Student Class

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, program) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }

  // Methods
  passExam(programName, grade) {
    this._program.forEach((item) => {
      if (item.programName === programName) {
        item.grade = grade;
      }
    });
  }
  isAllPassed() {
    if (this.program.every((item) => item.grade >= 50)) {
      this._year++;
    }
  }
}

const firstPerson = new Person("Jane", "Doe", "Female", 35);

console.log(firstPerson.toString());
const programs = [
  { programName: "Math", grade: 10 },
  { programName: "English", grade: undefined },
];
const firstStudent = new Student(
  "Emma",
  "Stone",
  "Female",
  21,
  1,
  18000,
  programs
);

console.log(firstStudent);
firstStudent.passExam("Math", 60);

console.log(firstStudent._program);
firstStudent.passExam("English", 70);
console.log(firstStudent._program);
firstStudent.isAllPassed();
