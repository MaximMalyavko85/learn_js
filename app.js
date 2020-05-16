/********1 ПЕРЕМЕННЫЕ*********/


//var first_name = "Maxim" // не использовать var
//let first_name = "Maxim" // не использовать var
//const last_name = "Malyavko" // read only string
//let age = 35 // number
//const isProgrammer = true; //boolean

//нет строгой типизации
//style guide -> camelCase
// споры как писать с ; или без. Js позволяет и без - локоничным, чистым, в 99,99% они не нужны


//const _private = 'private'
//const $ = 'same value'

/********2 МУТИРОВАНИЕ************/
//лучше использовать одинарные ковычки - элегантнее
//если одна из переменных строкаб то сработате конкатенация - все приводится к строке => age.toString()
// фиолетовый - это Number
//console, alert = это фишки браузера

//console.log("name of men: " + first_name)
//console.log("age: " + age)
//console.log(age)
//const enterEge = prompt("Enter sip: ")
//console.log(enterEge)

/********3 ОПЕРАТОРЫ************/

//const currentYear = 2020
//const birthYear = 1985
//let myEge = 2020 - 1985
//console.log(currentYear++) // вот тут вот еще выведется 2020 - попорядку - вывели страрое значение, а после увеличили
//console.log(++currentYear) // вот тут вот еще выведется 2020 - попорядку - вывели новое значение, а после вывели
//console.log(currentYear) // 2021

/********4 ТИПЫ ДАННЫХ************/
// примитивы string, number, boolean, undefined, null

/* const isProgrammer = true
const name = "Maxim"
const age = 26
let x
console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(typeof null) // => object - bug */



/********5 ПРИОРИТЕТ ОПЕРАЦИЙ************/
/* const fullAge = 35
const birth = 1985
const currentYear = 2020

// > < >= <=
//()- приоритет самый высокий 20 баллов => mdn приоритет операторов
// <== - приоритет 11, +- - приоритет 13
const isFullAge = currentYear - birth >= fullAge */



/********6 УСЛОВНЫЕ ОПЕРАТОРЫ************/
/*const coursStatus = 'pending'

 if (coursStatus === 'ready') {
  console.log('курс уже готов и его можно проходить')
} else if (coursStatus === 'pending') {
  console.log('курс только разрабатывается')
} else {
  console.log('курс не получился')
} */

//const isReady = true

/* if(isReady) {
  console.log("все готово")
} */

//вместо if используются тернарные выражения, : - это else
//isReady ? console.log(""):

/* const num1 = 42
const num2 = '42'
console.log(num1 == num2) // так как == то приводится все к одному типу данных - в данном случае к строке
console.log(num1 === num2) // так как === проверяет по типу */



/********7 БУЛЕВАЯ ЛОГИКА************/
// || && - возвращают последний, если всё условие правда
// || - запинается на правде. Будет перебирать все, пока не встретить правду
// && - запинается на лжи. Будет перебирать все, пока не встретить ложь

// !true === false, !!true === true


/********8 ФУНКЦИИ************/
/* function calcAge(year) {
  return 2020 - year
}

/* console.log(calcAge(1993))  */
// композиции из функций

/*function infoAbout(name, year){
  let age = calcAge(year);
  age>0?console.log("Имя персоны - ", name, age): console.log("что-то")
}

infoAbout("Maxo", 2010) */


/********9 МАССИВЫ************/
const cars = ["Mazda", "VW", "Ford"]
//const cars = new Array("Mazda", "VW", "Ford") - вот так не стоит
/* cars[0] = "Porshe"
cars[cars.length] = "Mazda"
console.log(cars)
console.log(cars[1])
console.log(cars.length) */


/********9 ЦИКЛЫ************/
/* for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
} */

/* for (let car of cars){
  console.log(car) 
} */
