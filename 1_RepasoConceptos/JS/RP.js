let img = document.querySelector('#imag')
let img2 = document.querySelector('.imag')
let text = document.querySelector('#text')

let fun1 = document.querySelector('#b1')
fun1.addEventListener('click', act1)

function act1 (){
    img.classList.add('BN')
    fun1.classList.add('change')
    fun1.removeEventListener('click', act1)
    fun1.addEventListener('click', des1)
    text.innerHTML = "Blanco y Negro está activado"
    img.classList.remove('Blur')
    fun2.classList.remove('change')
    fun2.removeEventListener('click', des2)
    fun2.addEventListener('click', act2)
    img2.classList.remove('Rot_Scl')
    fun3.classList.remove('change')
    fun3.removeEventListener('click', des3)
    fun3.addEventListener('click', act3)
    text.style.top = '-10vh'
    text.style.width = '35%'
}

function des1 (){
    img.classList.remove('BN')
    fun1.classList.remove('change')
    fun1.removeEventListener('click', des1)
    fun1.addEventListener('click', act1)
    text.innerHTML = ""
}

let fun2 = document.querySelector('#b2')
fun2.addEventListener('click', act2)

function act2 (){
    img.classList.add('Blur')
    fun2.classList.add('change')
    fun2.removeEventListener('click', act2)
    fun2.addEventListener('click', des2)
    text.innerHTML = "Desenfocar está activado"
    img.classList.remove('BN')
    fun1.classList.remove('change')
    fun1.removeEventListener('click', des1)
    fun1.addEventListener('click', act1)
    img2.classList.remove('Rot_Scl')
    fun3.classList.remove('change')
    fun3.removeEventListener('click', des3)
    fun3.addEventListener('click', act3)
    text.style.top = '-10vh'
    text.style.width = '35%'
}

function des2 (){
    img.classList.remove('Blur')
    fun2.classList.remove('change')
    fun2.removeEventListener('click', des2)
    fun2.addEventListener('click', act2)
    text.innerHTML = ""
}

let fun3 = document.querySelector('#b3')
fun3.addEventListener('click', act3)

function act3 (){
    img2.classList.add('Rot_Scl')
    fun3.classList.add('change')
    fun3.removeEventListener('click', act3)
    fun3.addEventListener('click', des3)
    text.innerHTML = "Zoom y Rotar están activados"
    text.style.width = '100%'
    img.classList.remove('Blur')
    fun2.classList.remove('change')
    fun2.removeEventListener('click', des2)
    fun2.addEventListener('click', act2)
    img.classList.remove('BN')
    fun1.classList.remove('change')
    fun1.removeEventListener('click', des1)
    fun1.addEventListener('click', act1)
}

function des3 (){
    img2.classList.remove('Rot_Scl')
    fun3.classList.remove('change')
    fun3.removeEventListener('click', des3)
    fun3.addEventListener('click', act3)
    text.style.top = '-10vh'
    text.style.width = '35%'
    text.innerHTML = ""
}