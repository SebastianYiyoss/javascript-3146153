/* identificar el item clickeado y aplicar sus propiedades en en html */
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))

const capitulo = comic.capitulos.find(capitulos => capitulos.id === id)

/* llamar y almacenar en constantes los contenedores vacíos de html */
const sec1 = document.querySelector('.sec1')
const sec2 = document.querySelector('.sec2')

/* insertar una cabeza y video en las secciones del html vacías y sus contenidos de la base de datos */
sec1.innerHTML =`
    <header class="cabeza">
        <a href="./index.html?id=${capitulo.id}">←</a>
        <h2>${capitulo.nombreCap}</h2>
    </header>
`

sec2.innerHTML =`
    <video class="video" controls src="${capitulo.preVista}"></video>
`