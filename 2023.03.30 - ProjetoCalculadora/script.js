let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")

function somar(){
    let s = Number(n1.value) + Number(n2.value)

    document.getElementById("r").innerHTML = `Resultado: ${s}`
}

function dividir(){
    let d = Number(n1.value) / Number(n2.value)

    document.getElementById("r").innerHTML = `Resultado: ${d}`
}