//Массивы

let a5 = []//Пустой массив - тип any

let b5 = [1,2,3]
//b5 = ['']//Ошибка. b5 уже определен как number

let c5: number[]

let d5: Array<number> = []
//d5 = ['']//Ошибка. d5 уже определен как number

let e5: (number | string)[] = [1, 2, '']

let f5: Array<number | string> = [1, 2, '']

//Кортежи

let g5: [number, string] = [1, '']
//g5 = [1, 2]//Ошибка. Второй элемент должен быть строкой
//g5 = [1]//Ошибка. Должно быть два элемента

let h5: [number, string?] = [1, '']
h5 = [1]
//h5 = [1, 2]//Ошибка. Второй элемент, если он есть, должен быть строкой

//Перечисления

enum Z {
    K = 5,
    L
}

console.log(Z.K, Z.L)

enum Y {
    K = 'Строка',
    L = 'Еще строка'
}

console.log(Y.K, Y.L)

console.log(Z.K, Z.L)

const enum X {
    K,
    L
}

console.log(X.K, X.L)
