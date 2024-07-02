let menu = document.getElementById('menu')
let btn = document.getElementById('menu-moba')
let overlay = document.getElementById('overlay')

menu.addEventListener('click', ()=>{
    menu.classList.add('abrir-moba')
})

btn.addEventListener('click', ()=>{
    menu.classList.remove('abrir-moba')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-moba')
})