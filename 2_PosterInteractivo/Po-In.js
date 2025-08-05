const monedas = document.querySelectorAll('#moneda')
let corazones = document.querySelector('#corazon')
let contadorMonedas = document.querySelector('#contadorM')
let contadorCorazones = document.querySelector('#contadorC')

let cantidadC = 3
let cantidadM = 0

monedas.forEach(function(moneda){
    moneda.addEventListener('click', function(){
        cantidadM++
        contadorMonedas.textContent = cantidadM
        moneda.classList.add('recoger')
        moneda.classList.remove('cursor')
    })
})

corazones.addEventListener('click', cora)
function cora(){
    cantidadC++
    contadorCorazones.textContent = cantidadC
    corazones.classList.add('corazon2')
}