var img = document.getElementById("lampada")

function desligar(){
    document.getElementById("lampada").setAttribute("src", "img/luzDesligada.gif")
}

function ligar(){
    img.setAttribute("src", "img/luzLigada.gif")
}

function sumir(){
    /* document.getElementById("lampada").setAttribute("src", "") ou */
    document.getElementById("lampada").style.display="none"
}

function aparecer(){
    document.getElementById("lampada").style.display="block"
    /* ou desligar() */
}

function trocar(){
    if (img.getAttribute('src') == "img/luzDesligada.gif"){
        /* img.src = "img/luzLigada.gif" ou */
        ligar()
    } else{
        /* img.src = "img/luzDesligada.gif" ou */
        desligar()
    }
}