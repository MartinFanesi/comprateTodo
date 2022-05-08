////gaseosas
// Cargamos una imagen 
rotarImagenes2();
// Indicamos que cada 2 segundos cambie la imagen
setInterval(rotarImagenes2, 4000);


/*---slide fotos del proceso--*/
/* Array con las imagenes y enlaces que se iran mostrando en la web*/
var imagenes2 = new Array(
    ['./img/golosinas/bananitaDolca.webp'],
    ['./img/golosinas/beldent.webp'],
    ['./img/golosinas/bono.webp'],
    ['./img/golosinas/cadbury.webp'],
    ['./img/golosinas/cofler_block.webp'],
    ['./img/golosinas/gomitas_yumi.webp'],
    ['./img/golosinas/guaymallen.webp'],
    ['./img/golosinas/lenguetazo.webp'],
    ['./img/golosinas/mogulGomitas.webp'],
    ['./img/golosinas/sugusConfitados.webp']
);


var contador2 = 0;

/* Funcion para cambiar la imagen*/
function rotarImagenes2() {
    // cambiamos la imagen y el alt
    contador2++
    const imagen2 = document.getElementById('proceso2');
    imagen2.style.opacity = "0";
    setTimeout(() => {
        imagen2.style.opacity = "1";
        imagen2.src = imagenes2[contador2 % imagenes2.length][0];
        imagen2.alt = imagenes2[contador2 % imagenes2.length][1];

    }, 1000);
}
///////////////////////////////////////////////



////gaseosas
// Cargamos una imagen 
rotarImagenes();
// Indicamos que cada 2 segundos cambie la imagen
setInterval(rotarImagenes, 4000);


/*---slide fotos del proceso--*/
/* Array con las imagenes y enlaces que se iran mostrando en la web*/

var imagenes = new Array(
    ['./img/gaseosa/7up.webp'],
    ['./img/gaseosa/coca_cola.webp'],
    ['./img/gaseosa/gatorade.webp'],
    ['./img/gaseosa/speed.webp']);


var contador = 0;

/* Funcion para cambiar la imagen*/
function rotarImagenes() {
    // cambiamos la imagen y el alt
    contador++
    const imagen = document.getElementById('proceso');
    imagen.style.opacity = "0";
    setTimeout(() => {
        imagen.style.opacity = "1";
        imagen.src = imagenes[contador % imagenes.length][0];
        imagen.alt = imagenes[contador % imagenes.length][1];

    }, 1000);
}

//////////////////////////////////////////////

////gaseosas
// Cargamos una imagen 
rotarImagenes3();
// Indicamos que cada 2 segundos cambie la imagen
setInterval(rotarImagenes3, 4000);


/*---slide fotos del proceso--*/
/* Array con las imagenes y enlaces que se iran mostrando en la web*/
var imagenes3 = new Array(
    ['./img/muchoMas/bicLapiceras.webp'],
    ['./img/muchoMas/hipergas.webp'],
    ['./img/muchoMas/laGotita.webp'],
    ['./img/muchoMas/luckyStrike.webp'],
    ['./img/muchoMas/philipsMorris.webp']
    
);


var contador3 = 0;

/* Funcion para cambiar la imagen*/
function rotarImagenes3() {
    // cambiamos la imagen y el alt
    contador3++
    const imagen3 = document.getElementById('proceso3');
    imagen3.style.opacity = "0";
    setTimeout(() => {
        imagen3.style.opacity = "1";
        imagen3.src = imagenes3[contador3 % imagenes3.length][0];
        imagen3.alt = imagenes3[contador3 % imagenes3.length][1];

    }, 1000);
}


