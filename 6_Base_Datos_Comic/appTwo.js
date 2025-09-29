const info = document.querySelector('#blackSquare')
info.innerHTML = `
<h1>${comic.nombreCap1}</h1>
<p>${comic.descripcionC1}</p>
<a href="">▶ Ver Capítulo</a>
<div class="barra">
    <div></div>
</div>`

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
});