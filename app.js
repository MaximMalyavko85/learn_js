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

/********3 ТИПЫ ДАННЫХ************/

const isProgrammer = true
const name = "Maxim"
const age = 26

console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)
