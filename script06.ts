//Классы

class Person { //Класс
    _name: string = 'Игорь' //Поле
    _age: number = 23

    get name(): string { // Свойство (геттер)
        return this._name
    }

    set name(value: string) { // Свойство (сеттер)
        this._name = value  
    }

    get age(): number { // Свойство (геттер)
        return this._age
    }

    set age(value: number) { // Свойство (сеттер)
        if (value > 0 && value < 100) {
            this._age = value  
        } else {
            throw new Error('Неверный возраст')
        }
        
    }

    constructor (name: string, age: number) {// Конструктор
        this._name = name
        this._age = age
    }

    sayHello(): string {// Метод
        return 'Привет, меня зовут ${this._name}'
    }

    static isFlying  = false // Статическое поле

    static description(): string{ // Статический метод
        return "Класс 'Человек'"
    }
}

const igor: Person = new Person('Игорь', 23) // Объект
const dima: Person = new Person('Дима', 18)

console.log(igor)
console.log(igor.sayHello())
console.log(igor.age)
igor.age = 50
console.log(igor.age)

console.log(Person.isFlying)
console.log(Person.description())

console.log(dima)

if (igor instanceof Person) {
    console.log('Hello TypeScript')
}