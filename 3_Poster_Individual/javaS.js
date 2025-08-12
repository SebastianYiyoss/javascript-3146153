let ost = document.querySelector('#ost')
let actOst = document.querySelector('.escenario1')

actOst.addEventListener('mouseover', actOst1)
function actOst1(){
    ost.play(true)
}

let monedaSound = new Audio('./audios/moneda.mp3')
let completo = new Audio('./audios/completo.mp3')
let itemSound = new Audio('./audios/item.mp3')
let daño = new Audio('./audios/daño.mp3')
let muerteSound = new Audio('./audios/muerte.mp3')
let cambiar = new Audio('./audios/cambiaresc.m4a')
let abrir = new Audio('./audios/abrir.mp3')
let abrirHoja = new Audio('./audios/AbrirHoja.mp3')
let cerrar = new Audio('./audios/Cerrar.mp3')
let ost2 = document.querySelector('#ost2')
let ostG = document.querySelector('#ostGame')

const monedas = document.querySelectorAll('#monedas')
let contadorM = document.querySelector('#contador')
let contadorM2 = document.querySelector('#contador2')
let cantidadM = 0

monedas.forEach(function(moneda){
    moneda.addEventListener('click', function subirC(){
        moneda.classList.add('monedaGrab')
        moneda.classList.remove('cursorM')
        moneda.removeEventListener('click', subirC)
        cantidadM++
        contadorM.textContent = cantidadM
        contadorM2.textContent = cantidadM
        monedaSound.play(true)

        setTimeout(() => {
            contadorM.classList.add('contadorCL')
            setTimeout(() => {
                contadorM.classList.remove('contadorCL')
            }, 1000);
        }, 0);
        setTimeout(() => {
            contadorM2.classList.add('contadorCL')
            setTimeout(() => {
                contadorM2.classList.remove('contadorCL')
            }, 1000);
        }, 0);
        if (cantidadM == 10){
            escotillaA.addEventListener('click', abrirescot)
            escotillaA.classList.add('clickScot')
            recoge1.innerHTML = "Abre la escotilla"
            recoge2.innerHTML = "Abre la escotilla"
            completo.play(true)
        }
    })
})

let item = document.querySelector('.item')
let datosItem = document.querySelector('.itemData')
let isaac = document.querySelector('.isaac')
let isaacMove = document.querySelector('.isaacData')
let isaac2 = document.querySelector('.isaac2')

item.addEventListener('click', itemClick)
function itemClick(){
    isaacMove.classList.add('isaacMove1')
    puerta1.removeEventListener('click', cambio1)

    setTimeout(() => {
        datosItem.classList.add('itemDataAnimation')
        item.classList.remove('itemMove')
        item.classList.add('itemGrab')
        isaac.setAttribute('src', './multimedia/isaacItem.png')
        isaac2.setAttribute('src', './multimedia/isaacItem.png')
        itemSound.play(true)
    }, 1000);
    setTimeout(() => {
        puerta1.addEventListener('click', cambio1)
    }, 6000);
}

let pincho1 = document.querySelector('.enemigo')
let pincho2 = document.querySelector('.enemigo2')
let corazon = document.querySelector('.corazon')
let corazon2 = document.querySelector('.corazon2')
let isaacMove2 = document.querySelector('.isaacData2')
let vida = 0

pincho1.addEventListener('click', pinchada1)
function pinchada1(){
    isaacMove2.classList.add('isaacPincho1')
    pincho1.classList.remove('cursorEN')
    puerta2.removeEventListener('click', cambio2)
    setTimeout(() => {
        puerta2.addEventListener('click', cambio2)
    }, 4000);
    setTimeout(() => {
        daño.play(true)
    }, 900);
    setTimeout(() => {
        corazon.setAttribute('src', './multimedia/CorazónMitad.png')
        corazon2.setAttribute('src', './multimedia/CorazónMitad.png')
        corazon2.classList.add('corazonMove2')
        corazon2.classList.remove('corazonMove1')
        corazon.classList.add('corazonMove2')
        corazon.classList.remove('corazonMove1')
    }, 2000);
    setTimeout(() => {
        vida++
        if (vida === 1){
            pincho2.addEventListener('click', muerte)
            pincho2.classList.remove('ENdisable')
            pincho1.classList.add('ENdisable')
        }
    }, 4500);
}
function muerte(){
    isaacMove2.classList.add('isaacPincho2')
    item.removeEventListener('click', itemClick)
    setTimeout(() => {
        isaac2.setAttribute('src', './multimedia/Muerto.png')
        corazon2.setAttribute('src', './multimedia/CorazónVacío.png')
        corazon2.classList.add('corazonMuerto')
    }, 2000);
    setTimeout(() => {
        muerteSound.play(true)
    }, 1800);
    isaacMove.classList.add('chao')
    pincho2.classList.remove('cursorEN')
    puerta2.removeEventListener('click', cambio2)
    setTimeout(() => {
        puerta2.addEventListener('click', cambio3)
    }, 4000);

}

let es3 = document.querySelector('.escenario3')

function cambio3(){
    es3.classList.remove('hidden3')
    es2.classList.add('hidden2')
    ost2.play(true)
    ost.pause(true)
    cambiar.play(true)
}

let es1 = document.querySelector('.escenario1')
let es2 = document.querySelector('.escenario2')
let puerta1 = document.querySelector('#puerta')
let puerta2 = document.querySelector('#puerta2')

puerta1.addEventListener('click', cambio1)
function cambio1(){
    es1.classList.add('hidden1')
    es2.classList.remove('hidden2')
    cambiar.play(true)
}

puerta2.addEventListener('click', cambio2)
function cambio2(){
    es1.classList.remove('hidden1')
    es2.classList.add('hidden2')
    cambiar.play(true)
}

let endIsaac = document.querySelector('.isaacM')
let texto = document.querySelector('.hablar')

endIsaac.addEventListener('click', textoEM)
function textoEM(){
    endIsaac.removeEventListener('click', textoEM)
    texto.classList.remove('hablarHidden')
    endIsaac.classList.remove('cursorIM')
    setTimeout(() => {
        texto.classList.add('hablarHidden')
    }, 2000);
    setTimeout(() => {
        texto.classList.remove('hablarHidden')
        texto.innerHTML = "Ahora te quedarás aquí conmigo"
        setTimeout(() => {
            texto.classList.add('hablarHidden')
        }, 4000);
    }, 3000);
}

let escotilla = document.querySelector('.escot2')
let escotillaA = document.querySelector('.escot1')

function abrirescot(){
    escotilla.classList.remove('hiddenScot')
    recoge1.innerHTML = "Sal de aquí"
    recoge2.innerHTML = "Sal de aquí"
    abrir.play(true)
}

let recoge1 = document.querySelector('.recoge')
let recoge2 = document.querySelector('.recoge2')
let gano = document.querySelector('.gano')

escotilla.addEventListener('click', isaacChao)
function isaacChao(){
    isaacMove.classList.add('isaacSeVa')
    es1.classList.add('escenario11')
    setTimeout(() => {
        es1.classList.add('hiddenFinal')
    }, 2500);
    setTimeout(() => {
        gano.classList.remove('gano2')
    }, 3500);
}

let rep = document.querySelector('.repetir')

rep.addEventListener('click', repetirTodo)
function repetirTodo(){
    location.reload(true)
}

let equis = document.querySelector('.equis')
let seguir = document.querySelector('.seguir')
let monedaTxt = document.querySelector('.monedaText')
let game = document.querySelector('#otroJuego')
let monedaF = document.querySelector('.monedaFeliz')

equis.addEventListener('click', cerrarVentana)
function cerrarVentana(){
    es2.classList.remove('borroso')
    game.classList.add('hiddenhoja')
    cerrar.play(true)
    setTimeout(() => {
        ostG.pause(true)
        ost.play(true)
    }, 500);
    noP.classList.add('hiddenP')
    bola.classList.remove('hiddenhoja')
}

let bola = document.querySelector('#bola')
let jugar = document.querySelector('.jugar')
let noP = document.querySelector('.noP')

bola.addEventListener('click', abrirVentana)
function abrirVentana(){
    bola.setAttribute('src', './multimedia/bolaAbierta.png')
    bola.classList.remove('bola')
    bola.classList.add('hojaSuelo')
    game.classList.add('otroJuego')
    game.classList.add('aparece')
    game.classList.remove('hiddenhoja')
    bola.classList.add('hiddenhoja')
    es2.classList.add('borroso')
    abrirHoja.play(true)
    setTimeout(() => {
        ostG.play(true)
        ost.pause(true)
    }, 500);
    noP.classList.remove('hiddenP')
}

let bit = new Audio('./audios/Bit.mp3')

seguir.addEventListener('click', siguiente)
function siguiente(){
    monedaTxt.innerHTML = "Como sea, ¿Quieres jugar mi juego?"
    monedaF.setAttribute('src', './multimedia/moneda1.png')
    seguir.removeEventListener('click', siguiente)
    seguir.addEventListener('click', siguiente2)
    bit.play(true)
}
function siguiente2(){
    monedaTxt.innerHTML = "Se llama Moneda Feliz..."
    monedaF.setAttribute('src', './multimedia/moneda2.png')
    seguir.removeEventListener('click', siguiente2)
    seguir.addEventListener('click', siguiente3)
    bit.play(true)
}
function siguiente3(){
    monedaTxt.innerHTML = "¡Juguemos!, ya te explico cómo."
    monedaF.setAttribute('src', './multimedia/moneda1.png')
    seguir.removeEventListener('click', siguiente3)
    seguir.classList.add('hiddenhoja')
    jugar.classList.remove('hiddenhoja')
    bit.play(true)
}