//Сигнатура и перегрузка функций
function ab(x:number, y:number): number {
    return x + y
}

function bc(x:number, y:number): void {
//    return x + y //Ошибка
console.log(x + y)
}

function cd(p:number) :never {
    throw new Error()
}

//Перегрузки - указываем, какой тип данных вводить, и какой тип у функции
//Поэтому можем объявить несколько одноименных функций с параметрами разных типов
function gh(x:number, y:number): number
function gh(x:string, y:number): string
function gh(x:any, y:any): any { 
}

console.log(gh(3,5)) //Ошибки нет