document.querySelector("#btn").addEventListener('click', funcoes)

function funcoes(){
    console.log("Entrei")

    /*let dados = ['Felipe', 'João', 'Júlia', 'Angelina', 'Ana']
    console.log(dados[0])
    
    for(i = 0; i < dados.length; i++){
        /*console.log((i + 1 ) + "° nome: " + dados[i])        /
        console.log(dados[i])
    }
    
    let dados2 = ["Votorantim", "SP", "Capivara"]
    let [cidade, uf, mascote] = dados2
    cidade = "Nova Votorantim"

    console.log(`A cidade de ${cidade} fica em ${uf} e tem ${mascote} como mascote`)
    console.log(`A cidade de ${dados2[0]} fica em ${dados2[1]} e tem ${dados2[2]} como mascote`)

    let objeto = {
        nome: "Felipe",
        endereco: {
            rua: "Rua Votorantim",
            bairro: "Jardim São Paulo",
            numero: 27,
            cidade: "Sorocaba",
            estado: "SP"
        },
        esportes: ["Natação", "Vôlei"]
    }

    let {esportes} = objeto
    let {endereco} = objeto

    console.log(esportes, endereco)
    console.log(esportes.join(" "))
    */

    var objeto={
        nome: "Felipe",
        idade: "18",
        email: "felipe.silva581@fatec.sp.gov.br",
        endereco: {
            rua: "Rua Sorocaba, 220",
            cidade: "Votorantim"
        },
        passatempo: ['videogame', 'quebra-cabeca', 'baixo'],
        falar: function(){
            console.log(`Meu nome é ${this.nome}`)
        }
    }
    objeto.falar();
    console.log(objeto.endereco.rua)



    let registro1 = ["Ana", "Sorocaba", 100, 200, 500]
    let registro2 = ["Júlia", "200", 15, true]

    let [nome, cidade, ...dividas] = registro1

    let array = [...registro1, ...registro2]

    console.log(dividas)
    console.log(array)
}