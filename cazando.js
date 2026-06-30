let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

let gatoX= canvas.height/2;
let gatoY= canvas.width/2;
let comidaX= 460;
let comidaY= 10;

const ALTO_GATO= 60;
const ANCHO_GATO= 60;
const ALTO_COMIDA= 25;
const ANCHO_COMIDA= 25;

function iniciar(){
    graficargato();
    graficarcomida();
}

function graficargato(){
    ctx.fillStyle="gray";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}

function graficarcomida(){
    ctx.fillStyle="green";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}