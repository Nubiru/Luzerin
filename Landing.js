const webPage = document.querySelector('body')
const landingContainer = document.querySelector('.landing-container')
const splitOne = document.querySelector('.split.one')
const titleOne = document.querySelector('.title.one')
const star = document.querySelector('.star')
const corona = document.querySelector('.corona')
const btnOne = document.querySelector('.btn.one')
const splitTwo = document.querySelector('.split.two')
const profeciaContainer = document.querySelector('.profecia-container')
const titleTwo = document.querySelector('.title.two')
const btnTwo = document.querySelector('.btn.two')
const parafs = document.querySelectorAll('.paraf')

const fastSpeed = 5000
const slowSpeed = 8000

//usuario pasa mouse, estrella crece + desaparece, aparece corona, se puede apretar

const welcomeOne = function () {
  star.addEventListener('mouseenter', (event) => {
    event.target.style.scale = 50

    corona.style.opacity = 1
    corona.style.scale = 50

    splitOne.style.background = 'transparent'

    setTimeout(() => {
      corona.style.cursor = 'pointer'
      corona.disabled = 'false'
    }, fastSpeed)

    setTimeout(() => {
      event.target.remove()
    }, slowSpeed)

    //usuario apreta corona, titulo + corona desaparecen, aparece subtitulo + btn profecia

    corona.addEventListener('click', (event) => {
      event.target.style.scale = 0
      event.target.style.opacity = 0
      titleOne.style.opacity = 0
      let subtitle = document.createElement('h4')
      splitOne.appendChild(subtitle)
      subtitle.classList.add('subtitle')

      setTimeout(() => {
        event.target.remove()
        titleOne.remove()
        subtitle.style.opacity = 1
        subtitle.innerText = `La otra Historia de la Magia y la Hechiceria`
      }, fastSpeed)

      setTimeout(() => {
        btnOne.style.opacity = 1
        btnOne.disabled = false
        splitOne.style = 'cursor: url(./Archivos/colibriCursor.png), auto;'

        btnOne.addEventListener('click', () => {
          splitOne.style = 'transform: translateX(-100%);'
          splitTwo.style = 'transform: translateX(0%);'
          welcomeTwo()
        })
      }, slowSpeed)
    })
  })
}

//usuario apreta boton profecia, pantalla desliza izq + aparece profecia

//falta que reciba innerText de profecia.json

const welcomeTwo = function () {
  profeciaContainer.addEventListener('mouseover', (event) => {
    profeciaContainer.style = 'overflow-y: scroll;'
    profeciaContainer.style.opacity = 1
  })

  parafs.forEach((paraf, idx) => {
    paraf.style = 'overflow-y: none;'
    switch (idx) {
      case 0:
        paraf.innerText = `Hace muchos años, lo que hoy se conoce como el territorio de América del Sur, había encontrado una forma de organización donde reinaba el equilibrio entre los seres y su entorno. Muy cerca del punto más austral del continente, una bruja, profeta de estas tierras, reveló una videncia, un mensaje donde presagiaba que se aproximaban tiempos oscuros. En aquel escenario natural, las señales del destino empezaron a tejerse, auspiciadas por la advertencia de la hechicera. Resonó como un eco profundo, marcando el inicio de una época en la que la tranquilidad ancestral se vería desafiada por sombras venideras. Cuentan que dijo
      `
        break
      case 1:
        paraf.innerText = `Las tinieblas se posarán sobre nuestras flores, largo y arduo será el camino de la verdad, todo quedará oculto en las sombras, las batallas no cesarán. Muchas derrotas aplacarán la esperanza, la muerte inundará de sangre los ríos, las almas gritarán a Dios por su olvido. 
      Dios no olvidará, y bajará a la tierra a su mejor guerrero, al más hábil, al que no pueden dominar. Lo protegerá. Tenebrosos lo encerrarán por seis tiempos. La liberación traerá el mensaje, olor a mujer, ojos al sur, corazón en unión. Será poseedor de la salvación, será el vuelo, será el colibrí.
      `
        break
      case 2:
        paraf.innerText = `Orfebres y escultores de la época, con sus manos diestras y creatividad inigualable, se dispusieron a esculpir un tributo en honor al pequeño pájaro, plasmando con maestría las palabras ancestrales, las profecías que enviaban los dioses.
      Lo llamaron Lúzerin. 
      Fue adorado en épocas de catástrofes, muertes y desesperanza. El rastro del gran colibrí se perdió entre los fuegos y los humos, el tiempo y las batallas. La historia quedó enterrada.      
      `
    }
  })

  //button show only when scroll. needs improvement. make this a % of client screen, not a fixed number
  profeciaContainer.addEventListener('scroll', (event) => {
    btnTwo.disabled = event.target.scrollTop > 500 ? false : true
    btnTwo.style.opacity = event.target.scrollTop > 400 ? 1 : 0
    titleTwo.style.opacity = event.target.scrollTop > 50 ? 0 : 1
  })
}

// LOAD NEXT PAGE
window.onload = welcomeOne
