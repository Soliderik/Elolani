let saludos = saludo1html
let mensaje1 = msg1html
let mensaje2 = msg2html
let mensaje3 = msg3html

let rsthtml = document.getElementById("rst")
let continthtml = document.querySelector(".contint")
let btnsaludo = document.getElementById("saludo")
let btnmensaje1 = document.getElementById("msg1")
let btnmensaje2 = document.getElementById("msg2")
let btnmensaje3 = document.getElementById("msg3")
let msgoriginal = continthtml.textContent

function actualizarContenido (textoFinal) {
    continthtml.textContent = textoFinal
}

btnmensaje1.addEventListener("click", function(){
    actualizarContenido(mensaje1)
})
btnmensaje2.addEventListener("click", function(){
    actualizarContenido(mensaje2)
})
btnmensaje3.addEventListener("click", function(){
    actualizarContenido(msg3html)
})
btnsaludo.addEventListener("click", function(){
    actualizarContenido(saludos)
} )
rsthtml.addEventListener("click", function(){
    actualizarContenido(msgoriginal)
} )



let saludo1html = document.getElementsById("saludo1")
let msg1html = document.getElementsById("msg11")
let msg2html = document.getElementsById("msg12")
let msg3html = document.getElementsById("msg13")



