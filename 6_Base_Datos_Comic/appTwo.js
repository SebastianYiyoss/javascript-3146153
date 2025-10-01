/* identificar el item clickeado y aplicar sus propiedades en en html */
const params = new URLSearchParams(window.location.search)

/* llamar y almacenar en constantes los contenedores vacíos de html */
const id = parseInt(params.get("id"))
const containerT = document.querySelector('#contenedorHeader')
const container = document.querySelector('#contenedor')
const containerB = document.querySelector('#contenedorCaps')

const capitulo = comic.capitulos.find(capitulos => capitulos.id === id)

/* insertar el contenido dentro de cada seccion y aplicar los datos de cada uno desde la base de datos */
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

/* almacenar en constantes las secciones que cambiarán al hacer click */
const info = document.querySelector('#blackSquare')
const secCaps = document.querySelector('#capsN')

/* crear un div con imagen y título por cada item que hay en la bse de datos (capítulos) dentro de la sección de capítulos  */
comic.capitulos.forEach(caps => {
    const divs = document.createElement('div')
    divs.innerHTML = `
            <div class="cap2">
                <img src="${caps.imgPortada2}" alt="" class="imagenCap">
                <h3>${caps.nombreCap}</h3>
            </div>
`
    secCaps.appendChild(divs)

    /* cambiar el contenido de la información de capítulo dependiendo dre cual item o capítulo clikeo */
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