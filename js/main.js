//cache dos seletores
const header = document.querySelector('.header-top')
const logo = document.querySelector('.logo')
const menuHamb = document.querySelector('.checkbtn')
const menuResponsivo = document.querySelector('.menu-js')
const nav = document.querySelectorAll('nav a[href^="#"]')

//const scrollLinks = document.querySelectorAll('nav a[href^="#"]')

// scroll de pagina
nav.forEach(item => {
    item.addEventListener('click', scrollOnclick) //callback
})

function scrollOnclick (e) {
    e.preventDefault() // prevenir mudança do endereço na URL
    const element = e.target
    const id = element.getAttribute('href') // getAtrib... pega o atributo do element
    const section = document.querySelector(id).offsetTop // descreve a altura em realço a section
    //console.log(section.offsetTop)

    window.scroll({
        top: section - 80,
        behavior: 'smooth',
    })
}


//funções de scroll-----------------------------------
// scroll header function--------------------------------
window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
        header.classList.add('menuColorized')
        logo.style.position = 'fixed'
        logo.style.top = '0'
    } else {
        header.classList.remove('menuColorized')
        logo.style.position = 'fixed'
        logo.style.top = '0'
    }    

})    


// Responsive menu mobile function--------------------------------
menuHamb.addEventListener('click', fecharMenu) 
let aberto = false

function fecharMenu() {
    if (!aberto) {
        aberto = true
        menuResponsivo.classList.add('aberto')
    } else {
        aberto = false
        menuResponsivo.classList.remove('aberto')
    }
}

// recolher menu ao clicar no link-----------------------------------
nav.forEach(item => item.addEventListener('click', recolherMenu))


function recolherMenu(e) {
    if(e.type === 'click') {
        menuResponsivo.classList.remove('aberto')
    }
}

