document.getElementById('pesquisaCep').addEventListener('click', pesquisaCep)

async function pesquisaCep(){

    try{
        let cep = document.getElementById('cep').value
        const apiViaCep = `https://viacep.com.br/ws/${cep}/json/`

        const resCep = await fetch(apiViaCep)
        const data = await resCep.json()
        console.log(data)
        
        document.getElementById('rua').value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
    }
    catch{
        alert('CEP Inválido!')
    }
}

document.querySelector('#verificarClima').addEventListener('click', async (event) => {
    event.preventDefault()

    const apiKey = '0f8b0e2b1b7de8ee641c65e5d5ccc530'
    const apiBDImagemUnsplash = 'https://source.unsplash.com/1600x1900/?'
    const apiBandeiraPais = (country) => `https://flagsapi.com/${country}/flat/64.png`

    const cidade = document.querySelector("input[name = 'cidade']").value

    const tempElement = document.querySelector('#temperatura')
    const humidadeElement = document.querySelector('#humidade')
    const ventoElement = document.querySelector('#vento')
    const tempoElement = document.querySelector('#tempo')


    const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiClimaURL)
    const dataClima = await res.json()

    console.log(dataClima)

    if (dataClima.cod === '404'){
        alert('Cidade Inválida!')
        return
    }

    tempElement.textContent = parseFloat(dataClima.main.temp) + 'º'
    humidadeElement.textContent = parseFloat(dataClima.main.humidity) + '%'
    ventoElement.textContent = parseFloat(dataClima.wind.speed)+ 'km/h'
    tempoElement.textContent = dataClima.weather[0].description

    const siglaPais = dataClima.sys.country
    console.log(siglaPais)

    document.getElementById('cidadeTemp').textContent = cidade
    document.getElementById('icone').setAttribute('src', `http://openweathermap.org/img/wn/${dataClima.weather[0].icon}.png`)
    document.getElementById('imgPais').setAttribute('src', apiBandeiraPais(siglaPais))
    document.getElementById('imgCidade').setAttribute('src', apiBDImagemUnsplash + cidade)
})