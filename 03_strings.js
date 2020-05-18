/********STRING types*********/
/* const firstName = "Maximo"
const age = 35

function getAge() {
  return 36
} */
//const output = firstName + age // плюсы это плохо. Много всего, и можно запутаться
/* const output = `hi, 
  ${firstName}. 
  <p>My old is</p> 
  <div>${age < 35 ? age : getAge()}</div>` // ``в них вся магия
 */
//console.log(output)


//const firstName = "Maximo"
//чтобы методы работали JS оборачивает все это в new String(firstName)
/* console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2)) //на какой позиции какой символ
console.log(firstName.indexOf('mo')) //присутствует ли в строке = начальный индекс - иначе вернет -1
console.log(firstName.toLowerCase().startsWith('ma')) //присутствует ли в строке = начальный индекс - иначе вернет -1
console.log(firstName.toLowerCase().endsWith('mo')) // стартует ли строка с
console.log(firstName.toLowerCase().endsWith('mo')) // оканчивается ли строка на
console.log(firstName.repeat(3)) //  повторить 3 раза */

/* const pass = '   password     '
console.log(pass.trim()) // очистить все пробелы
console.log(pass.trimLeft()) // очистить все пробелы слева
console.log(pass.trimRight()) // очистить все пробелы справа */

/* function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Еще не родился'
  }
  return `Info about person ${s[0]}:${name}${s[1]}${age}${s[2]}`
}

const personName = "Edik",
  pesonAge = 0

const output = logPerson`Name${personName}, age: ${pesonAge}!`           // новый синтаксис. logPerson`` - функция не вызывается

console.log(output) */