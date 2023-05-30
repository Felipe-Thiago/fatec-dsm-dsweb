function imprimir(){
    if (document.getElementById("nome").value == ''){
        var nomejs = window.prompt("Informe seu nome")
        document.querySelector('#nome').value = nomejs
        
    }   
    window.print()
}

function limpar(){
    window.confirm("Tem certeza de que deseja limpar os dados?")
    if (window.confirm == true){
        document.querySelector('#formulario').reset()
    }
}

function relogio(){
    var hora = new Date()
    /*var horaat = hora.getHours()
    var min = hora.getMinutes()
    var seg = hora.getSeconds()
    cada var pode ser inserida dentro dos ${}
    */

    document.querySelector("#hora").innerText = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`
}

setInterval(relogio, 1000)

function calcular(){
    var nome = document.querySelector("#nome").innerHTML
    var adic = document.querySelectorAll("input[name='adicionais']:checked")
    var somaAdic = 0
    for (var i = 0; i < adic.length; i++){
        somaAdic += Number(adic[i].value)
    }

    var dest = Number(document.getElementById("destino").value)
    /*var guia = Number(document.querySelector("input[name='guia']:checked").value)
    
    if*/ 

    var total = somaAdic + dest

    document.getElementById("total").innerHTML = `${nome} irá pagar ${dest}, pagando pelo adicional ${somaAdic} e pelo guia, totalizando: ${total}`
}