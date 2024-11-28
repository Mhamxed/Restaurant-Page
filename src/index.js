import { home, removeHome } from "./home"
import menu from "./menu"
import about from "./about"

const homebtn = document.querySelector("#home")
const menubtn = document.querySelector("#menu")
const aboutbtn = document.querySelector("#about")

const logo = document.querySelector('.logo')

home()

homebtn.addEventListener('click', () => {
    removeHome();
    home();
})

menubtn.addEventListener('click', () => {
    removeHome();
    menu();
})

aboutbtn.addEventListener('click', () => {
    removeHome();
    about();
})

logo.addEventListener('click', () => {
    removeHome();
    home();
})
