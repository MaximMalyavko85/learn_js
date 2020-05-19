/********ФУНКЦИИ************/
//она может принимать параметры что-т оделать и что-то возвращать
// Function declaration
/* function greet(name) {
  console.log('hello - ', name)
} */


//Function expression
//создается функция а заносится в greet2 как значание
//const greet2 = function () { }
/* const greet2 = function greet2(name) {
  console.log('привет 2')
}
 */
//greet('Elena')
//greet2('Elena')
//console.log(typeof greet) // function, но, такого типа данных нет. Это уловка для удобства разработки
// все функции являются обьектами
//console.dir(greet)


/********АНОНИМНЫЕ ФУНКЦИИ************/
// Анонимные функции (функции без имени). Вызываются не по имени а по ссылке. 
//Вызов функции стандартно соответствует ()- команда на ЗАПУСК функции                                    ///ЗАПУСК
/* setTimeout(function(){
  //
}, 100) */

/********СТЕЛОЧНЫЕ ФУНКЦИИ************/
// определенный синтаксис
/* const arrow = (name) => { }
const arrow = name => console.log("ARROW") // если одна строчка
const pow2 = numm => numm ** 2   // возведение во вторую степень - возвращает без логики */



/********ПАРАМЕТРЫ ПО УМОЛЧАНИЮ************/
// ES6
// если одного числа нет, то NaN - 41+ undefined
//const add = (a = 40, b = 1) => a + b
//const add = (a = 40, b = a * 2) => a + b
//console.log(add())

/* function summAll(...all) { // неопределенное количество параметров - собираем в all все числа
  let result = 0;
  for (let numm of all) {
    result += numm
  }
  return result
}

const res = summAll(10, 30, 40, 2)
console.log(res) */


/********ЗАМЫКАНИЯ************/
// это явление, когда мы из одной функции возвращаем другую функцию
// польза - создание приватных переменных
function createMember(name) {
  return function (lastName) {
    console.log(name + '' + lastName)
  }
}

const logWithLastName = createMember("Igor")
console.log(logWithLastName("Sitnik"))