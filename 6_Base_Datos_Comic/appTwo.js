const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))
const containerT = document.querySelector('#contenedorHeader')
const container = document.querySelector('#contenedor')
const containerB = document.querySelector('#contenedorCaps')

const capitulo = comic.capitulos.find(capitulos => capitulos.id === id)

containerT.innerHTML = `
    <section class="cabeza">
        <header>
            <a href="../index.html" class="atras">↩</a>
             <a class="openEyes" href="">Más de OPEN EYES</a>
        </header>
    </section>
`

container.innerHTML = `
    <section class="${capitulo.back}">
        <div class="square">
            <div class="blackSquare" id="blackSquare">
                <h1>${capitulo.nombreCap}</h1>
                <p>${capitulo.descripcion}</p>
                <a href="./index-Videos.html?id=${capitulo.id}">▶ Ver Capítulo</a>
                <div class="barra">
                    <div></div>
                </div>
            </div>
        </div>
    </section>
`

containerB.innerHTML = `
    <section class="restCaps">
        <div class="divCaps2" id="capsN">
            
        </div>
    </section>
`

const info = document.querySelector('#blackSquare')

const secCaps = document.querySelector('#capsN')

comic.capitulos.forEach(caps => {
    const divs = document.createElement('div')
    divs.innerHTML = `
            <div class="cap2">
                <img src="${caps.imgPortada2}" alt="" class="imagenCap">
                <h3>${caps.nombreCap}</h3>
            </div>
`
    secCaps.appendChild(divs)

    divs.addEventListener('click', capPas)
    function capPas (){
        container.innerHTML = `
        <section class="${caps.back}">
            <div class="square">
                <div class="blackSquare" id="blackSquare">
                    <h1>${caps.nombreCap}</h1>
                    <p>${caps.descripcion}</p>
                    <a href="./index-Videos.html?id=${caps.id}">▶ Ver Capítulo</a>
                    <div class="barra">
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
`
    }
});