function exer1(){
    var x = Number(document.querySelector("#inputx").value)
    var y = Number(document.querySelector("#inputy").value)

    media = (x + y)/2

    document.querySelector("#result_ex1").innerHTML = `Resultado da média: ${media}`
}

function exer2(){
    x = window.prompt("Insira o valor x: ")
    y = window.prompt("Insira o valor y: ")

    pot = Math.pow(x, y)

    document.querySelector("#result_ex2").innerHTML = `Resultado da potência: ${pot}`
}

function exer3(){
    var v1 = Number(document.querySelector("#v1").value)
    var v2 = Number(document.querySelector("#v2").value)
    var v3 = Number(document.querySelector("#v3").value)

    let valores = [v1, v2, v3]

    menor = Math.min(v1, v2, v3)

    document.querySelector("#result_3").innerHTML = `Menor valor: ${menor}`
}

function exer4(){
    let dados={
        marca:"HP",
        modelo:"V15",  
        config:{ 
            memoria: 8, 
            processador: "i7" 
        },
    }

    let {modelo, config:{processador}} = dados
    console.log(`Modelo: ${modelo}`)
    console.log(`Processador: ${processador}`)
}



function exer5(){
    let dados={
        marca:"HP",
        modelo:"V15",  
        config:{ 
            memoria: 8, 
            processador: "i7" 
        },
    }

    var v1 = Number(document.querySelector("#v1").value)
    var v2 = Number(document.querySelector("#v2").value)
    var v3 = Number(document.querySelector("#v3").value)

    let valores = [v1, v2, v3]


    let {marca, config:{processador}} = dados
    document.querySelector("#marca").innerHTML = `Marca: ${marca}`
    document.querySelector("#processador").innerHTML = `Processador: ${processador}`
    
    document.querySelector("#valor").innerHTML = `Segundo valor: ${valores[1]}`
}



function exer6(){
    let dados={
        marca:"HP",
        modelo:"V15",  
        config:{ 
            memoria: 8, 
            processador: "i7" 
        },
        exibir: function(){
            window.alert(`O equipamento é um ${marca} com um processador ${processador}`)
        },
    }

    let {marca, config:{processador}} = dados
    dados.exibir()
}

function exer7(){
    let dados={
        marca:"HP",
        modelo:"V15",  
        config:{ 
            memoria: 8, 
            processador: "i7" 
        },
    }

    let novoEquip={
        ...dados,
        valorVenda: 2999.90,
        qtdEstoque: 25
    }

    let {valorVenda, qtdEstoque, marca, config:{processador}} = novoEquip
    document.querySelector("#result_7").innerHTML = `Marca: ${marca} <br> 
    Processador: ${processador} <br>
    <br>
    Valor: R$ ${valorVenda.toFixed(2)} <br>
    Quantidade em Estoque: ${qtdEstoque}`

    console.log(`Marca: ${marca} \nProcessador: ${processador}`)
    console.log(`Valor: R$ ${valorVenda.toFixed(2)} \nQuantidade em Estoque: ${qtdEstoque}`)
}

function exer8(){
    //8 a)
    let X = [15, 20]
    let Y = [12, 15, 23, 43]
    document.querySelector("#result_8a").innerHTML = `Array X: ${X}`

    //8 b)
    console.log(Y.join(" - "))
    document.querySelector("#result_8b").innerHTML = `Array Y: ${Y.join(" - ")}`

    //8 c)
    let Z = [...X, ...Y]
    console.log(X)
    console.log(Y)
    console.log(Z)
    document.querySelector("#result_8c").innerHTML = `Array Z: ${Z}`

    //8 d)
    let mapZ = Z.map(function(num){
        return num * 5
    })
    console.log(`Os números de Z multiplicados por 5 são iguais a ${mapZ.join(", ")}`)
}