/********OBJECTS************/
// тип данных, но не примитивы
const person = {
  name: 'Maxo',
  age: 35,
  'complex key': 'Complex value',
  [Date.now()]: '',
  ['key_' + (1 + 3)]: 'Computed kee',
  isProgrammer: true,
  languagest: ['RU', 'EN'],
  greet: function () { }, // greet this is method
  newGreet() {// в новой редакции
    console.log('Greet for person')
  },
  info() {
    console.log(`Information by: ${this.name}`)
  }
}

/* console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
person.age++
person.languagest.push('by')
person.newGreet()

delete person['key_4'] // удаление ключа

console.log(person) */

//const { name, age: personAge = 10, languagest } = person //что хотим получить и откуда === деструктуризация. 
//age: personAge = 10 - переименовать и вставить значение по умолчанию.
//console.log(name, personAge, languagest)


/* for (let key in person) {  // опасен. Он бежит не только по ключам, но и заходить в _proto_
  if (person.hasOwnProperty(key)) {// надо вставлять вот это проверку - hasOwnProperty - если есть свое собственное свойство, которое не находится в прототипе
    console.log(person[key])
  }
} */
// но можно итерировать по другому
/* const keys = Object.keys(person) // Object.keys - получить ключи обьекта
Object.keys(person).forEach((key) => {
  console.log(person[key])
}) */



//КОНТЕКСТ
//person.info()
const logger = {
  keys() {
    console.log('keys of object - ', Object.keys(this))
  },
  /* keysAndValue() {
    Object.keys(this).forEach((key) => {   // если вместо стрелочной использовать function, то function создает свой собствнный контекст и this будет указывать на него
      console.log(`${key}: ${this[key]}`)
    })
  } */
  keysAndValue() {
    //  const self = this                            // либо до этого сохранить контекст
    Object.keys(this).forEach(function (key) {
      console.log(`${key}: ${self[key]}`)
    }.bind(this))                                    // либо забайндить на this
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('--------------------START----------------------')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`${key}: ${this[key]}`)
      if (between && index !== array.length - 1) {
        console.log('----------------------------------------------')
      }
    })
    if (bottom) {
      console.log('--------------------END----------------------')
    }
  }
}

/* const bound = logger.keys.bind(person)  // привязываем контекст this person к методу keys. Возвращает функцию, которую надо вызвать
bound() */

//logger.keys.call(person) // сама вызфвается
//logger.keysAndValue.call(person) // сама вызфвается
//logger.withParams.call(person, true, true, true)       // неограниченное количество параметров
logger.withParams.apply(person, [true, true, true])   // всегда только 2 параметра