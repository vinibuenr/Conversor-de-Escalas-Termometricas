// Variaveis

const primeiroSeletor = document.querySelector('.primeiraSeleçao')
const segundoSeletor = document.querySelector('.segundaSeleçao')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')
let temperatura = document.querySelector('.inputTemperatura')

// Funções

botao.addEventListener('click', conversor)

function conversor(evento) {
    evento.preventDefault();

    // Celsius

    if (primeiroSeletor.value === 'celsius' && segundoSeletor.value === 'kelvin') {
        let operacao = parseFloat(273 + parseFloat(temperatura.value))
        return resultado.innerHTML = `<p> O resultado é: <strong>${operacao.toFixed(2)}K</strong></p>`
    }
    else if (primeiroSeletor.value === 'celsius' && segundoSeletor.value === 'fahrenheit') {
        let operacao = (1.8 * parseFloat(temperatura.value)) + 32
        return resultado.innerHTML = `<p> O resultado é: <strong> ${operacao.toFixed(2)}°F </strong></p>`
    }

    // Kelvin

    if (primeiroSeletor.value === 'kelvin' && segundoSeletor.value === 'celsius') {
        let operacao = parseFloat(parseFloat(temperatura.value) - 273)
        return resultado.innerHTML = `<p> O resultado é: <strong>${operacao.toFixed(2)}°C</strong></p>`
    } else if (primeiroSeletor.value === 'kelvin' && segundoSeletor.value === 'fahrenheit') {
        let operacao = parseFloat((temperatura.value - 273) * 9 / 5 + 32)
        return resultado.innerHTML = `<p> O resultado é: <strong>${operacao.toFixed(2)}°F</strong></p>`
    }

    // Fahrenheit

    if (primeiroSeletor.value === 'fahrenheit' && segundoSeletor.value === 'celsius') {
        let operacao = parseFloat((temperatura.value - 32) * 5 / 9)
        return resultado.innerHTML = `<p> O resultado é: <strong>${operacao.toFixed(2)}°C</strong></p>`
    } else if (primeiroSeletor.value === 'fahrenheit' && segundoSeletor.value === 'kelvin') {
        let operacao = parseFloat((temperatura.value - 32) * 5 / 9 + 273)
        return resultado.innerHTML = `<p> O resultado é: <strong>${operacao.toFixed(2)}K</strong></p>`
    }
}
