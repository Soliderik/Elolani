// let saludos = "hola Annie :)"
// let mensaje1 = "¿Cómo estás?"
// let mensaje2 = "¿que estás haciendo?"
// let mensaje3 = "que tengas una bonita noche :)"
// let rsthtml = document.getElementById("rst")
// let continthtml = document.querySelector(".contint")
// let btnsaludo = document.getElementById("saludo")
// let btnmensaje1 = document.getElementById("msg1")
// let btnmensaje2 = document.getElementById("msg2")
// let btnmensaje3 = document.getElementById("msg3")
// let msgoriginal = continthtml.textContent

// function actualizarContenido (textoFinal) {
//     continthtml.textContent = textoFinal
// }

// btnmensaje1.addEventListener("click", function(){
//     actualizarContenido(mensaje1)
// })
// btnmensaje2.addEventListener("click", function(){
//     actualizarContenido(mensaje2)
// })
// btnmensaje3.addEventListener("click", function(){
//     actualizarContenido(mensaje3)
// })
// btnsaludo.addEventListener("click", function(){
//     actualizarContenido(saludos)
// } )
// rsthtml.addEventListener("click", function(){
//     actualizarContenido(msgoriginal)
// } )

var typeWriter = document.getElementById('type-writer');
var dataText = typeWriter.getAttribute('data-text');

var count = 0;
var dataTextLength = dataText.length;

var setText = function () {
  setTimeout(function () {
    typeWriter.textContent = typeWriter.textContent + dataText.charAt(count);
    count++;
    if (count <= dataTextLength) {
      setText()
    }
  }, 80);
}

window.onload = () => {
  setText()
}

