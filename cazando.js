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

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficargato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"gray");
}

function graficarcomida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"green");
}