function calcular(){
    var quantidade = Number(document.querySelector("#quant").value)
    var adic = document.querySelectorAll("input[name='adicional']:checked")
    var somaAdic = 0
    var desconto = 0

    var opcao = Number(document.querySelector("input[name='opcao']:checked").value)

    for (i = 0; i < adic.length; i++){
        somaAdic += Number(adic[i].value)
    }
    

    var total = quantidade * opcao + somaAdic

    if (quantidade <= 2){
        desconto = total * 0.05
    } else{
        if (quantidade > 2){
            desconto = total * 0.1
        }
    }

    var totDesc = total - desconto

    document.querySelector("#Rtotal").innerHTML = `<b>Total: </b>R$${total.toFixed(2)}`
    document.querySelector("#RDesconto").innerHTML = `<b>Desconto </b>R$${desconto.toFixed(2)}`
    document.querySelector("#RTotDesc").innerHTML = `<b>Total com Desconto: </b>R$${totDesc.toFixed(2)}`

    console.log(total)
    console.log(desconto)
    console.log(totDesc)

}