'use strict'

const btnBuscar = document.getElementById('buscar')
const inputRaca = document.getElementById('raca')

const getUrlFotos = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const preencherGaleria = async () => {
    const galeria = document.getElementById('container-galeria')
    const urlFotos = await getUrlFotos(inputRaca.value)
    const fotos = urlFotos.message.map(criarFoto)

    galeria.replaceChildren(...fotos)
    
}

const criarFoto = (url) => {
    const foto = document.createElement('img')
    foto.src = url
    foto.className = 'foto'

    return foto
}

btnBuscar.addEventListener('click', preencherGaleria)