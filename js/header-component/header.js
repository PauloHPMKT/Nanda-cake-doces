/*const header = document.querySelector('.header-top')
const logo = document.querySelector('.logo')
const menuHamb = document.querySelector('.checkbtn')
const menuResponsivo = document.querySelector('.menu-js')
const navMobile = document.querySelectorAll('nav .menu-js li a')



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



navMobile.forEach(item => item.addEventListener('click', recolherMenu))

function recolherMenu(e) {
    if(e.type === 'click') {
        menuResponsivo.classList.remove('aberto')
    }
}*/