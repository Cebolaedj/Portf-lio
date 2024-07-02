let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-moba')
let overlay = document.getElementById('overlay')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-moba')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-moba')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-moba')
})
