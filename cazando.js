let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

function iniciar(){
    graficargato();
}

function graficargato(){
    ctx.fillStyle="gray";
    ctx.fillRect(canvas.height/2,canvas.width/2,80,50);
}