// lightbox effect gallery--------------------------------
const pictures = document.querySelectorAll('#imglightbox')

pictures.forEach(images => {
    images.addEventListener('click', () => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = images.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

const lightbox = document.createElement('div')

lightbox.id = 'lightbox' // cria uma div com id="lightbox"
document.body.appendChild(lightbox)
    //appendChild == nó atribuido a div == elemento pai

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')

})