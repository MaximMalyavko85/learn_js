/********NUMBER types*********/
/* const num = 42 // integer
const float = 42.42// float
const pow = 10e3  // 10 в 3 степени */

// за кулисами это класс Number
//Number.MAX_SAFE_INTEGER - максимально число - выше- несовсем корректные вычисления 2 в 53 степени минус 1
//Number.MIN_SAFE_INTEGER - 2 в 53 +1
//Number.MAX_VALUE - 5 в степени 324 степени. Но вычислеть мы можем только интеджер
//Number.POSITIVE_INFINITY - положительная бесконечность
//Number.NEGATIVE_INFINITY - отридцательная бесконечность
//1/0 - бесконечность
//Number.NaN - /not a number - специальное значение, которое не является числом, но type of NAN - number, 2/undefined
// isNuN(2/undefined)=== true, Number.isNuN
//Number.isFinite(Infinity) - false - является ли число конечным

/* console.log('42' + 2) //= 422, так как у строки нет сложения, а только конкатенация.
console.log(Number.parseInt('40') + 2) // можно просто parseInt('42')
console.log(Number('40') + 2) 
console.log(+'40' + 2) 
console.log(Number.parseFloat(40.42) + 2) 
console.log(+parseFloat(40.42) + 2)  */


/* console.log(0.4 + 0.2) // 0.6000000000000000000001 так как числа храняться в битовой.....
console.log(+(0.4 + 0.2).toFixed(1)) */




/********BigInt*********/
//новый тип данных, больше чем MAX_SAFE_INTEGER

/* console.log(typeof 90071992547409919999999n) // add n to finish
// roole - bigInt работате только с bigInt, нет десятичных, 
//console.log(10n - 4)//error
console.log(parseInt(10n) - 4) // преобразовать
console.log(10n - BigInt(4)) // преобразовать
console.log(5n / 2n) // 2.5 - отсекается дробная = 2 */
