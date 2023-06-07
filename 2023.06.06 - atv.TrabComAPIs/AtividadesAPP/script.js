document.getElementById("pesquisaCep").addEventListener('click', PesquisarCep)

async function PesquisarCep(){
    let cep = document.getElementById('cep').value

    const apiViaCep = 'https://viacep.com.br/ws/' + cep + '/json/'
    
    const resCep = await fetch(apiViaCep)
    const data = await resCep.json()

    if (data.erro == true){
        alert("CEP Inválido")
    }else{
        document.getElementById("rua").value=`${data.logradouro} ${data.bairro} ${data.localidade} ${data.uf}`
    }


    const apiKey = "0f8b0e2b1b7de8ee641c65e5d5ccc530" //Chave do joel, a minha deu erro por algum motivo
    const apiBDImagemUnsplash = "https://source.unsplash.com/1600x900/?"
    const apiBandeiraPais = "https://flagsapi.com/png/"
    const cidade = document.querySelector("input[name='cidade']").value
    
    
    
    const Etemperatura = document.querySelector("#temperatura");
    const Ehumidade = document.querySelector("#humidade");
    const Evento = document.querySelector("#vento");
    const Etempo = document.querySelector("#tempo");
    
    document.querySelector("#verificarClima").addEventListener("click", async (e) => {
        e.preventDefault()
        let apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`
    
        const res = await fetch(apiClimaURL)
        const dataClima = await res.json()
        if(dataClima.cod == "404"){
            alert("Cidade Inválida.")
            return
        }
    
        Etemperatura.innerText = parseFloat(dataClima.main.temp) + "º";
        Ehumidade.innerText = parseFloat(dataClima.main.humidity) + "%";
        Evento.innerText = parseFloat(dataClima.wind.speed) + "km/h"
        Etempo.innerText = dataClima.weather[0].description;
        document.getElementById("cidadeTemp").innerText = cidade;
        document.getElementById("icone").setAttribute("src", `https://openweathermap.org/img/wn/${dataClima.weather[0].icon}.png`);
        document.getElementById("imgPais").setAttribute("src", apiBandeiraPais + dataClima.sys.country);
        document.getElementById("imgCidade").setAttribute("src", apiBDImagemUnsplash + cidade);

        function Limpar(){
        var confResp = window.confirm("Tem certeza que deseja limpar?") 
        if (confResp == true){
            document.getElementById("idFormulario").reset()
            dadosLog.style.display = "none"
            dadosTemp.style.display = "none"
        }
        else
            window.alert("Operação Cancelada")
    }
        });
    


    
}
