let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")

function somar(){
    let s = Number(n1.value) + Number(n2.value)

    document.getElementById("r").innerHTML = `Resultado: ${s}`
}

function subtrair(){
    let sub = Number(n1.value) - Number(n2.value)

    document.getElementById("r").innerHTML = `Resultado: ${sub}`
}

function multiplicar(){
    let m = Number(n1.value) * Number(n2.value)

    document.getElementById("r").innerHTML = `Resultado: ${m}`
}

function dividir(){
    let d = Number(n1.value) / Number(n2.value)

    let total = d.toFixed(4)
    document.getElementById("r").innerHTML = `Resultado: ${total}`
    if(n2.value == 0){
        alert("Erro: Não é possível dividir por zero!")
        location.reload()
    }
}