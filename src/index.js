import './x.js'
import png from './1.png'
// import css from './x.scss'
// console.log(css)
// import x from './x.js'
// console.log('hi2')
const div = document.getElementById('app')
div.innerHTML = `<img src='${png}'>`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {


    const promise =
        import ('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {})
}
div.appendChild(button)