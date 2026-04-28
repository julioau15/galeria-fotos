'use strict'

const container = document.getElementById('racas')

const getRacas =  async () => {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const response = await fetch(url)
    const data = await response.json()

    return data.message
}
const data = await getRacas()

const keys = Object.keys(data)

const preencherOpcoes = (key) => {
    const option = document.createElement('option')
    option.value = key
    option.textContent = key
    return option
}

const opcoes = keys.map(preencherOpcoes)

container.replaceChildren(...opcoes)