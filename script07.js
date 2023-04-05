"use strict";
//Наследование классов
class Pers {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Привет, меня зовут ${this.name}!`;
    }
}
class Student extends Pers {
    constructor(name, age, group, course) {
        super(name, age); // Для вызова полей родительского класса
        this.group = '';
        this.course = 0;
        this.group = group;
        this.course = course;
    }
    sayHello() {
        //  return `Привет, меня зовут ${this.name}! Я из группы ${this.group}`
        const text = super.sayHello(); // Переопределяем метод Для того,
        //чтобы не выводить четыре поля
        return `${text} Я из группы ${this.group}`;
    }
}
class Teacher extends Pers {
    constructor(name, age, disciplines) {
        super(name, age);
        this.disciplines = [];
        this.disciplines = disciplines;
    }
}
const ira = new Pers('Ира', 18);
console.log(ira);
console.log(ira.sayHello());
const denis = new Student('Денис', 25, 'A1', 1);
console.log(denis);
console.log(denis.sayHello()); //***Все четыре поля, несмотря на изменения классов
const newDenis = denis; //Не работает в js, поэтому класс не изменится
//и выведет те же четыре поля - класс Student
console.log(newDenis);
console.log(newDenis.sayHello()); //***
const liza = new Student('Лиза', 20, 'A2', 2);
console.log(liza); //Те же четыре поля - класс Student
console.log(liza.sayHello()); //***
const leva = new Teacher('Лёва', 23, ['TupeScript', 'React Native']);
console.log(leva);
console.log(leva.sayHello());
//# sourceMappingURL=script07.js.map