function desligar(){
    document.getElementById("lampada").setAttribute("src", "img/luzDesligada.gif")
    document.getElementById("titulo").setAttribute("class", "alert alert-secondary")
    document.getElementById("body").setAttribute("class", "bg-body-secondary")

}

function ligar(){
    document.getElementById("lampada").setAttribute("src", "img/luzLigada.gif")
    document.getElementById("titulo").setAttribute("class", "alert alert-primary")
    document.getElementById("body").setAttribute("class", "bg-white")
}

function sumir(){
    /* document.getElementById("lampada").setAttribute("src", "") ou */
    document.getElementById("lampada").style.display="none"

    document.getElementById("btnLigar").style.display="none"
    document.getElementById("btnDesligar").style.display="none"
    document.getElementById("titulo").setAttribute("class", "alert alert-secondary")
}

function aparecer(){
    document.getElementById("lampada").style.display="block"
    /* ou desligar() */

    ligar()
    document.getElementById("btnLigar").style.display="inline-block"
    document.getElementById("btnDesligar").style.display="inline-block"
}