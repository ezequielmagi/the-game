const char = document.getElementById('character')

const btnUp =  document.getElementById('up')
const btnDown =  document.getElementById('down')
const btnLeft =  document.getElementById('left')
const btnRight = document.getElementById('right')


const subeUno = () => {
    let valorActual = parseInt(char.style.top)
    let nuevoValor = valorActual - 10
    char.style.top = nuevoValor + "px"
}

const bajaUno = () => {
    let valorActual = parseInt(char.style.top)
    let nuevoValor = valorActual + 10
    char.style.top = nuevoValor + "px"
}
const izquierdaUno = () => {
    let valorActual = parseInt(char.style.left)
    let nuevoValor = valorActual - 10
    char.style.left = nuevoValor + "px"
}
const derechaUno = () => {
    let valorActual = parseInt(char.style.left)
    let nuevoValor = valorActual + 10
    char.style.left = nuevoValor + "px"
}

btnUp.addEventListener( 'click' , () => {
    console.log('up')
    subeUno()
} )
btnDown.addEventListener( 'click' , () => {
    console.log('up')
    bajaUno()
} )
btnLeft.addEventListener( 'click' , () => {
    console.log('up')
    izquierdaUno()
} )
btnRight.addEventListener( 'click' , () => {
    console.log('up')
    derechaUno()
} )

