/********ARRAYS************/
const cars = ['Mazda', 'BMW', 'Ford', 'VW']
const people = [
  { name: 'Lunna', budget: 4300 },
  { name: 'Maxo', budget: 6000 },
  { name: 'Igor', budget: 300 },
  { name: 'Sveta', budget: 7200 },
]
const fibAny = [1, 1, 2, 3, 5, 8, 13, "FIB", true, {}]
const fib = [1, 1, 2, 3, 5, 8, 13]
// массивы по совей сущности являются обьектами
// можно через new Array()
//console.log(typeof cars) // object

/* cars.push('GovnoCar')
cars.unshift('Volga')
const removingElementFirst = cars.shift()
const removingElementLast = cars.pop();
console.log(cars) */

//console.log(cars.reverse())

//const index = cars.indexOf('VW') // хорошо работате с примитивными типами
/* cars[index] = 'Порше'
console.log(cars) */

/* const index = people.findIndex(function (person) { // findIndex - это цикл
  return person.budget === 300
})

const person = people.find(function (person) { // сразу не индекс а обьект
  return person.budget === 300
}) */

/* const person = people.find(person => person.budget === 300) // лямбда функция - без имени

console.log(person) */

// можно через цикл, но она не такая классная, как find
/* let findedPerson;
for(let person of people){
  if (person.budget === 6000){
    findedPerson = person
  }
} */

//console.log(cars.includes('Mazda'))  // наличие элемента


//carsToUppercase = cars.map(car => car.toUpperCase()) // map - всегда новый массив возвращает
//console.log(carsToUppercase)

const pow2 = pow => pow ** 2
//const sqrt = num => Math.sqrt(num)
//pow2Fib = fib.map(pow2).map(Math.sqrt) // передаем функцию а не запускаем. 

//pow2Fib = fib.map(pow2).filter(num => num > 20) // filter так же возвращает новый массив 
const allBudget = people  // chaining
  .filter(person => person.budget < 3000)
  .reduce(function (acc, person) {
    acc += person.budget
    return acc
  }, 0) // обьединяет, принимает функцию и то, с чего будем начинать - 0, асс (аккумулятор)- это неизменяемое значение

console.log(allBudget)


//Задача 1
/* const text = 'Привет, мы из Бангладеша'
const reverseText = text.split('').reverse().join('')
console.log(reverseText) */




