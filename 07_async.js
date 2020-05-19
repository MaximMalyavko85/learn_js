/********Ассинхронность************/
// js - однопоточный -за счет концепта Event Loop
/* const timeout = setTimeout(() => { // глобальная функция. По завершению таймаута запустится callback
  console.log("after timeout")
}, 2000)

clearTimeout(timeout)

const interval = setInterval(() => { // глобальная функция. По завершению таймаута запустится callback
  console.log("after interval")
}, 1000)

clearInterval(interval) */

//вот в таком подходе смысла так же нет
/* const delay = (callback, wait = 1000) => {
  setTimeout(callback, wait)
}
delay(() => { console.log('After two seconds') }, 2000) */

/********PROMISES************/
// когда мы видим некий ассинхронный код, мы всегда его можем обернут в Promise
const delay = (wait = 1000) => {
  return new Promise((resolve, reject) => {         // executor 1-ый callback
    setTimeout(() => {
      resolve()
      //reject('Что-то пошло не так')
    }, wait)
  })
}

/*delay(2500)
  .then(() => { // then метод у Promise
    console.log('After 2 seconds')
  })
  .catch(err => console.log('Error', err))
  .finally(() => console.log('finally')) */


const getData = () => new Promise(resolve => {
  resolve([1, 1, 2, 3, 5, 8, 13])
})

//getData().then(data => { console.log(data) })

async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log('Data', data)
  } catch (e) {
    console.log(e)
  } finally { }
}

asyncExample()


//setTimeout, setInterval, ajax - без перезагрузки, addEventListener(scroll, click)