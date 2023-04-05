"use strict";
//Сигнатура и перегрузка функций
function ab(x, y) {
    return x + y;
}
function bc(x, y) {
    //    return x + y //Ошибка
    console.log(x + y);
}
function cd(p) {
    throw new Error();
}
function gh(x, y) {
}
console.log(gh(3, 5)); //Ошибки нет
//# sourceMappingURL=script03.js.map