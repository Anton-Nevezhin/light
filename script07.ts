//Реализация интерфейсов
type IPersType = IPersTypeProps & {//Пересечение (наследование) типов
    sayHello(): string
}

type IPersTypeProps = {//Тип
    name: string,
    age: number,
}

interface IPersProps {//Интерфейс
    name: string,
    age: number,
}

interface IPers extends IPersProps{//Наследование интерфейса
    name: string,
    age: number,
    surname?: string, // Необязательное поле
    sayHello(): string
    //sayHello(): => string - другой вариант записи
}


//Наследование классов
class Pers implements IPers {
    name: string = ''
    age: number = 0

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello(): string {
        return `Привет, меня зовут ${this.name}!`
    }
}

class Student extends Pers { // Класс - наследник от класса Pers
    group: string = ''
    course: number = 0

    constructor(name: string, age: number, group: string, course: number) {
        super(name, age) // Для вызова полей родительского класса
        this.group = group
        this.course = course
    }

    sayHello(): string {
      //  return `Привет, меня зовут ${this.name}! Я из группы ${this.group}`
      const text = super.sayHello() // Переопределяем метод Для того,
      //чтобы не выводить четыре поля
      return `${text} Я из группы ${this.group}`
    
    }
}

class Teacher extends Pers {
    disciplines: string[] = []

    constructor(name: string, age: number, disciplines: string[]) {
        super(name, age)
        this.disciplines = disciplines
    }
}

const ira: Pers = new Pers('Ира', 18)
console.log(ira)
console.log(ira.sayHello())

const denis: Student = new Student('Денис', 25, 'A1', 1)
console.log(denis)
console.log(denis.sayHello());//***Все четыре поля, несмотря на изменения классов

const newDenis: Pers = <Pers>denis//Не работает в js, поэтому класс не изменится
//и выведет те же четыре поля - класс Student
console.log(newDenis)
console.log(newDenis.sayHello());//***

const liza: Pers = new Student('Лиза', 20, 'A2', 2)
console.log(liza)//Те же четыре поля - класс Student
console.log(liza.sayHello());//***

const leva: Teacher = new Teacher('Лёва', 23, ['TupeScript', 'React Native'])
console.log(leva)
console.log(leva.sayHello());