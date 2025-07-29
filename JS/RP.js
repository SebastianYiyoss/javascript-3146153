let img = document.querySelector('#imag')
let img2 = document.querySelector('.imag')

let fun1 = document.querySelector('#b1')
fun1.addEventListener('click', act1)

function act1 (){
    img.classList.add('BN')
    fun1.classList.add('change')
    fun1.removeEventListener('click', act1)
    fun1.addEventListener('click', des1)
}

function des1 (){
    img.classList.remove('BN')
    fun1.classList.remove('change')
    fun1.removeEventListener('click', des1)
    fun1.addEventListener('click', act1)
}

let fun2 = document.querySelector('#b2')
fun2.addEventListener('click', act2)

function act2 (){
    img.classList.add('Blur')
    fun2.classList.add('change')
    fun2.removeEventListener('click', act2)
    fun2.addEventListener('click', des2)
}

function des2 (){
    img.classList.remove('Blur')
    fun2.classList.remove('change')
    fun2.removeEventListener('click', des2)
    fun2.addEventListener('click', act2)
}

let fun3 = document.querySelector('#b3')
fun3.addEventListener('click', act3)

function act3 (){
    img2.classList.add('Rot_Scl')
    fun3.classList.add('change')
    fun3.removeEventListener('click', act3)
    fun3.addEventListener('click', des3)
}

function des3 (){
    img2.classList.remove('Rot_Scl')
    fun3.classList.remove('change')
    fun3.removeEventListener('click', des3)
    fun3.addEventListener('click', act3)
}