const monedas = document.querySelectorAll('#moneda')
const corazones = document.querySelector('#corazon')
let contadorMonedas = document.querySelector('#contadorM')
let contadorCorazones = document.querySelector('#contadorC')

let cantidadM = 0

monedas.forEach(function(moneda){
    moneda.addEventListener('click', function(){
        cantidadM++
        contadorMonedas.textContent = cantidadM
        moneda.classList.add('recoger')
        moneda.classList.remove('cursor')
    })
})