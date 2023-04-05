//Приведение типов

let a4: unknown = 1
let d4: number = <number>a4
let e4: number = a4 as number

//Объединение типов

type I4 = number | string
let k4: I4 = 2
k4 = 'Hello'
k4 = 'Привет!'
//k4 = true //Ошибка

type J4 = 1 | 2 | 3
let l4: J4 = 1
//l4 = 5 //Ошибка

type H4 = {a: string} | {b: string}
//let m4: H4 = {}//Ошибка. Должно быть хотя бы одно свойство из H4
//let k4: H4 = {c: string}//Ошибка. Должны быть свойста только из H4

//Пересечение типов

type N4 = {a: string} & {b: string}
//let n4: N4 = {a:'', b:'', c:''}//Ошибка. Свойство c не задано в типе N4

type P4 = {a: string, b?: string}
let p4: P4 = {a:''}
//let r4: P4 = {a:'', c:''}//Ошибка. Свойство c не задано в типе P4
//let r4: P4 = {}//Ошибка. Свойство a обязательно

//Оператор in

if ('a' in p4) {
    console.log('Привет!!!')
}