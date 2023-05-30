function exer1(){
    var sal = Number(document.getElementById("salario").value)
    var aum = Number(document.getElementById("aumento").value)

    var nSal = sal + sal * aum/100

    document.getElementById("resultado").innerHTML = `R$${nSal.toFixed(2)}`
}

function exer2(){
    var a = Number(document.getElementById("altTri").value)
    var b = Number(document.getElementById("baseTri").value)

    var areaTri = (b * a)/2

    document.getElementById("result02").value = `Área: ${areaTri}`
}

function exer3(){
    var n1 = Number(document.getElementById("nota1").value)
    var n2 = Number(document.getElementById("nota2").value)

    var mediaP = ((30*n1)+(70*n2))/(30 + 70)

    
    document.getElementById("result03").innerHTML = `Média Aritmética Ponderada: ${mediaP}`
}

function exer4(){
    var data = new Date()
    var dataNasc = document.getElementById("dataNasc").valueAsDate
    
    var anoNasc = dataNasc.getFullYear()
    var mesNasc = dataNasc.getMonth() + 1
    var diaNasc = dataNasc.getDate() + 1

    var idadeAno = data.getFullYear() - anoNasc
    var idadeMes = (data.getMonth() + 12 ) - mesNasc
    var idadeDias = (data.getDate() + 30) - diaNasc

    var idadeSemanas = idadeMes/4
    

    /* Outra forma de se fazer já incluído na linha de resposta
    var horaNasc = 24 - data.getHours()
    var minNasc = 60 - data.getMinutes()
    */
    console.log(`Data inserida: ${diaNasc}/${mesNasc}/${anoNasc}`)
    console.log(`Você tem aproximadamente ${idadeAno} anos, ${idadeMes} meses e ${idadeDias} dias, 
    além de ${24 - data.getHours()} horas, ${60 - data.getMinutes()} minutos e ${Math.round(idadeSemanas)} semanas`)

    console.log(`Em 2050 você terá ${2050 - anoNasc} anos`)
}

function exer5(){
    var d = document.querySelector("#dist").value
    var v = document.querySelector("#volGas").value
    
    var Cm = d / v

    document.querySelector("#resultado05").innerHTML = Cm

}

function exer6(){
    var pagHora = Number(document.querySelector("#pagHora").value)
    var horasTrab = 62
    var ref = Number(document.querySelector("#ref").value)
    var totalRef = ref * 1.50
    

    if (horasTrab > 40){
        salBruto = (pagHora * 40) + ((horasTrab - 40) * pagHora * 3)
        salLiq = salBruto - totalRef
    } else{
        salLiq = horasTrab * pagHora
        salBruto = salLiq
    }

    document.querySelector("#salarioLiquido").innerHTML = salLiq.toFixed(2)
    document.querySelector("#salarioBruto").innerHTML = salBruto.toFixed(2)
    document.querySelector("#descRefeicao").innerHTML = totalRef.toFixed(2)
}

function exer7(){
    var min = document.querySelector("#rMin").value
    var max = document.querySelector("#rMax").value

    nRandom = Math.floor(Math.random(min, max) * (max - min) + min)

    document.querySelector("#numRandom").innerHTML = nRandom

    if(nRandom%2 == 0){
        document.querySelector("#ImPar").innerHTML = "par"
    } else{
        document.querySelector("#ImPar").innerHTML = "impar"
    }
}

