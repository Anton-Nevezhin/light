"use strict";
//Классы
class Person {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 100) {
            this._age = value;
        }
        else {
            throw new Error('Неверный возраст');
        }
    }
    constructor(name, age) {
        this._name = 'Игорь'; //Поле
        this._age = 23;
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return 'Привет, меня зовут ${this._name}';
    }
    static description() {
        return "Класс 'Человек'";
    }
}
Person.isFlying = false; // Статическое поле
const igor = new Person('Игорь', 23); // Объект
const dima = new Person('Дима', 18);
console.log(igor);
console.log(igor.sayHello());
console.log(igor.age);
igor.age = 50;
console.log(igor.age);
console.log(Person.isFlying);
console.log(Person.description());
console.log(dima);
if (igor instanceof Person) {
    console.log('Hello TypeScript');
}
//# sourceMappingURL=script06.js.map