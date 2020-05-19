/********РАБОТА С DOM************/
// DOM - видим в elements. Это обьектное представление того html, который прилетел с сервера
// JS вносит изменение именно в DOM. DOM - это не часть JS, это часть браузера. И к нему есть доступ.
// document - object - это весь документ doctype.... <html> .... </html>
// window - object - alert, console, setTimout, setInterval

const heading = document.getElementById('title'); // получаес ссылку
//const headieng2 = document.getElementsByTagName('h2')[0] // все заголовки - по-этому HTMLColection - он старый и медленный
//const headieng2 = document.getElementsByClassName('h2-class')[0] - то же с кисточкой
//const headieng2 = document.querySelector('h2') // более универсальный, чем byid
//const headieng2 = document.querySelector('.h2-class') // можем и так
//const headieng2 = document.querySelector('#suptitle') // можем и так быстрый и во всех браузерах = возвращает всегда один елемент - первый попавшийся

const headingList = document.querySelectorAll('h2');
const heading2 = headingList[headingList.length - 1]
const link = heading3.querySelector(a) // вот так вот можно

setTimeout(() => {
  addStyleTo(heading, 'JavaScript', "green", '2rem')
}, 2000)

setTimeout(() => {
  addStyleTo(heading2, 'Всё получится')
}, 3000)

function addStyleTo(node, text, color = "red", fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = "center"
  node.style.backgroundColor = "#ddd"
  node.style.padding = "20px"
  if (fontSize) {    // falsy: '', undefined, null, 0, false
    node.style.fontSize = fontSize
  }
}


heading.onclick = () => {
  if (heading.style.color === 'green') {
    heading.style.color = "black"
    heading.style.backgroundColor = "#fff"
  } else {
    heading.style.color = "green"
    heading.style.backgroundColor = "#ddd"
  }
}

heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'green') {
    heading2.style.color = "black"
    heading2.style.backgroundColor = "#fff"
  } else {
    heading2.style.color = "green"
    heading2.style.backgroundColor = "#ddd"
  }
})

link.addEventListener('click', (e) => {
  e.preventDefault()
  const url = e.target.getAttribute('href')
  window.location = url
})