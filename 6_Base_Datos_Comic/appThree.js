const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))

const capitulo = comic.capitulos.find(capitulos => capitulos.id === id)

const sec1 = document.querySelector('.sec1')
const sec2 = document.querySelector('.sec2')

sec1.innerHTML =`
    <header class="cabeza">
        <a href="./index.html?id=${capitulo.id}">←</a>
        <h2>${capitulo.nombreCap}</h2>
    </header>
`

sec2.innerHTML =`
    <video class="video" controls src="${capitulo.preVista}"></video>
`