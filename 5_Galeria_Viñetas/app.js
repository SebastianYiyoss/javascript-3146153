
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})

const escenas = document.querySelectorAll('.escena')
const btnAnt = document.querySelector('.anterior')
const btnSig = document.querySelector('.siguiente')
const miniaturas = document.querySelectorAll('.miniaturas img')

let indice = 0

function mostrarEsc(i){
    for (let j = 0; j < escenas.length; j++){
        escenas[j].classList.remove('activa')
    }
    escenas[i].classList.add('activa')
    indice = i
}
btnSig.addEventListener('click', function(){
    indice++
    if (indice >= escenas.length){
        indice = 0
    }
    ostOne.pause()
    ostTwo.pause()
    ostThree.pause()
    mostrarEsc(indice)
})

btnAnt.addEventListener('click', function(){
    indice--
    if (indice < 0){
        indice = escenas.length - 1
    }
    ostOne.pause()
    ostTwo.pause()
    ostThree.pause()
    mostrarEsc(indice)
})

miniaturas.forEach( (miniatura, i) => {
    miniatura.addEventListener('click', function(){
        mostrarEsc(i)
    })
});

const ostOne = new Audio('./assets/ost.mp3')
const ostTwo = new Audio('./assets/ost2.mp3')
const ostThree = new Audio('./assets/ost3.mp3')

let playOne = document.querySelector('#play')
let playTwo = document.querySelector('#play2')
let playThree = document.querySelector('#play3')

playOne.addEventListener('click', function(){
    ostOne.play()
})
playTwo.addEventListener('click', function(){
    ostTwo.play()
})
playThree.addEventListener('click', function(){
    ostThree.play()
})

let stopOne = document.querySelector('#stop')
let stopTwo = document.querySelector('#stop2')
let stopThree = document.querySelector('#stop3')

stopOne.addEventListener('click', function(){
    ostOne.pause()
})
stopTwo.addEventListener('click', function(){
    ostTwo.pause()
})
stopThree.addEventListener('click', function(){
    ostThree.pause()
})