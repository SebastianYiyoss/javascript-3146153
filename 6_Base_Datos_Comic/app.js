const infoComic = document.querySelector('#infoComic')
infoComic.innerHTML = `
<div class="descrip" id="info"></div>
<img id="art" src="${comic.portada}" alt="">`

const infoTexts = document.querySelector('#info')
infoTexts.innerHTML = `
<h1>${comic.nombreComic}</h1>
<p>${comic.descripcion}</p>`

const capitulos = document.querySelector('#caps')
comic.capitulos.forEach(capitulo => {
    const div = document.createElement('div')
    div.classList.add('capitulosTwo')
    div.innerHTML = `
    <img src="${capitulo.imgPortada}" alt="">
    <h2>${capitulo.nombreCap}</h2>`

    capitulos.appendChild(div)
});

let arte = document.querySelector('#art')
setInterval(() => {
    arte.setAttribute('src', './assets/miniArt2.png')
    setTimeout(() => {
        arte.setAttribute('src', './assets/miniArt.png')
    }, 1500);
}, 2000);