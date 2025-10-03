var idsArray = [];
var currentID = null;
const botonesMama = document.getElementById('botones-pinedas')
const botonesDuarte = document.getElementById('botones-duarte')
const botonesLondoño = document.getElementById('botones-londoño')
const botonesToro = document.getElementById('botones-toro')
const botonesMuñoz = document.getElementById('botones-muñoz')
const botonesMira = document.getElementById('botones-mira')
const botonesGarcia = document.getElementById('botones-garcia') 
const videosContenedor = document.getElementById('video-v')
const imagenes = document.querySelectorAll('imagenes-i')


function vuelveaInicio() {
 // Obtener todos los elementos de audio en la página
 var audios = document.getElementsByTagName('audio');

 // Recorrer todos los elementos de audio y detener su reproducción
 for (var i = 0; i < audios.length; i++) {
   audios[i].pause();
   audios[i].currentTime = 0;
 }

 var elementsToHide = document.querySelectorAll('.video-v, .botones, .imagenes-i, .descripcion');   
 for (var i = 0; i < elementsToHide.length; i++) {
     elementsToHide[i].style.display = 'none';
 }

 var elementsToShow = document.querySelectorAll(".image, .button, .etiqueta, .container-Ini");  
 for (var i = 0; i < elementsToShow.length; i++) {
   elementsToShow[i].style.display = "flex";
 } 

 idsArray = [];

  enlargeImages()    
  /* setTimeout(startImageTransition, 600); */          
}

// Función para detener la reproducción de todos los elementos de audio
function detenerReproduccionAudios() {
  var audios = document.getElementsByTagName("audio");
  for (var i = 0; i < audios.length; i++) {
    audios[i].pause();
    audios[i].currentTime = 0;
  }
}

// Función para ir al contenedor anterior
function irContenedorAnterior() {

  // Ocultar el contenedor actual
  var contenedorActual = document.getElementById(idsArray[idsArray.length - 1]);
  contenedorActual.style.display = 'none';

  // Obtener el ID del contenedor anterior
  var previousElementID = idsArray[idsArray.length - 2];
  var contenedorAnterior = document.getElementById(previousElementID);
  contenedorAnterior.style.display = 'flex';

  // Actualizar el array quitando el último ID almacenado
  idsArray.pop();

  // Actualizar la variable currentID con el nuevo ID
  currentID = previousElementID;

  if (idsArray.length === 1) {
    // Si solo existe un elemento en el array, detener los audios
    detenerReproduccionAudios();
  }
}

function hideBotDescrip(elementId, buttonId) {
  const img = document.getElementById(buttonId);
  img.classList.add('pixelate');

  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
  }

  setTimeout(function() {
    img.classList.remove('pixelate');

    const elementsToHide = document.querySelectorAll('.botones');
    for (const el of elementsToHide) {
      el.style.display = 'none';
    }

    const botDescrip = document.getElementById(elementId);
    botDescrip.style.display = 'flex';

    const audio = botDescrip.querySelector('audio');
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.5;
      audio.play();
    }
  }, 500);
}


function hideDescripVideos(elementId) {       // DESCRIPCION / VIDEOS

 var elementsToHide = document.querySelectorAll('.botones, .imagenes-i'); 
 for (var i = 0; i < elementsToHide.length; i++) { 
   elementsToHide[i].style.display = 'none';
 }
 var contenedoresPadre = document.getElementsByClassName('descripcion');
 for (var i = 0; i < contenedoresPadre.length; i++) {
   contenedoresPadre[i].style.display = 'none';
 }
 var videoOlga = document.getElementById(elementId);  
 videoOlga.style.display = 'flex'; 

  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
  }
}

function hideDescripFotos(elementId) {        // DESCRIPCION / FOTOS     
 var elementsToHide = document.querySelectorAll('.botones, .video-v');
 for (var i = 0; i < elementsToHide.length; i++) { 
   elementsToHide[i].style.display = 'none';
 }
 var contenedoresPadre = document.getElementsByClassName('descripcion');  
 for (var i = 0; i < contenedoresPadre.length; i++) {
   contenedoresPadre[i].style.display = 'none';
 }
 var videoOlga = document.getElementById(elementId);
 videoOlga.style.display = 'flex';

if (elementId === 'imagenes-abuelos') {
  let abuelos = document.querySelector('#imagenes-abuelos');

  abuelos.style.position = 'absolute';   // o absolute según tu layout
  abuelos.style.top = '-50vh';
  abuelos.style.width = '30vw';
  abuelos.style.height = '50vh';

  // Para centrar contenido dentro de abuelos
  abuelos.style.display = 'flex';
  abuelos.style.justifyContent = 'center';
  abuelos.style.alignItems = 'center';
}

 
  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
  }
}

function hideVidImagen(elementId) {           // VIDEOS / FOTOS
 var elementsToHide = document.querySelectorAll('.botones, .video-v');
 for (var i = 0; i < elementsToHide.length; i++) { 
 elementsToHide[i].style.display = 'none';
 }
 var contenedoresPadre = document.getElementsByClassName('descripcion');
 for (var i = 0; i < contenedoresPadre.length; i++) {
 contenedoresPadre[i].style.display = 'none';
 }
 var contImagen = document.getElementById(elementId);
 contImagen.style.display = 'flex'; 

 if(elementId === 'imagenes-abuelos'){
  ajustarTamañoImagen('imagenes-abuelos', 600, 900);


 }

  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
  }
} 

function hideImagVideo(elementId) {           // FOTOS / VIDEOS  
 var elementsToHide = document.querySelectorAll('.botones, .imagenes-i');  
 for (var i = 0; i < elementsToHide.length; i++) { 
 elementsToHide[i].style.display = 'none';
 }
 var contenedoresPadre = document.getElementsByClassName('descripcion');
 for (var i = 0; i < contenedoresPadre.length; i++) {
 contenedoresPadre[i].style.display = 'none';
 }
 var contiVideo = document.getElementById(elementId);
 contiVideo.style.display = 'flex';

  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
  }

} 
function hideDescDesc(elementId) {            // DESCRIPCION / DESCRIPCION
 var contenedoresPadre = document.getElementsByClassName('descripcion');
 for (var i = 0; i < contenedoresPadre.length; i++) {
 contenedoresPadre[i].style.display = 'none';
 }
 var videoOlga = document.getElementById(elementId);
 videoOlga.style.display = 'flex';

  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
  }
}


function hideInicBotonera(elementID) {
 // INICIALES / BOTONERA
 var elementsToHide = document.querySelectorAll('.etiqueta, .button, .image');

 for (var i = 0; i < elementsToHide.length; i++) {
   elementsToHide[i].style.display = 'none';
 }

 // Hacer visible el contenedor
 var contenedor = document.getElementById(elementID);
 contenedor.style.display = 'flex';

 // Agregar el ID al array
 idsArray.push(elementID);

 // Obtener todas las imágenes dentro del contenedor
 var imagenes = contenedor.getElementsByTagName("img");

 // Aplicar los estilos de animación a cada imagen
 for (var i = 0; i < imagenes.length; i++) {
   var imagen = imagenes[i];
   imagen.style.animation = "zoomEffect1 1s";

   // Aplicar diferentes duraciones de animación
   if (i == 1) {
     imagen.style.animation = "zoomEffect1 0.8s";
   } else if (i == 2) {
     imagen.style.animation = "zoomEffect1 0.6s";
   } else if (i == 3) {
     imagen.style.animation = "zoomEffect1 0.4s";
   }
 }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<TRANSICIONES AL INICIO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function enlargeImages() {
 // Seleccionar todos los elementos con la clase 'descripcion' y almacenarlos en la variable 'elementsToHide'
 var elementsToHide = document.querySelectorAll('.descripcion');
 // Recorrer cada elemento en 'elementsToHide' y ocultarlos estableciendo su propiedad de visualización en 'none'
 for (var i = 0; i < elementsToHide.length; i++) {
   elementsToHide[i].style.display = 'none';
 }

 // Obtener todos los elementos con la clase 'image' y almacenarlos en la variable 'images'
 var images = document.getElementsByClassName('image');
 // Inicializar la variable de índice actual en 0
 var currentIndex = 0;

 // Obtener todos los elementos con la clase 'button' y almacenarlos en la variable 'buttons'
 var buttons = document.getElementsByClassName('button');
 // Obtener el elemento con la clase 'container-Ini' y almacenarlo en la variable 'container'
 var container = document.querySelector('.container-Ini');
 // Inicializar la variable de índice de botón en 0
 var buttonIndex = 0;

 // Definir una función para aplicar efectos a los botones
 function applyButtonEffects() {
   // Verificar si buttonIndex es menor que el número de botones
   if (buttonIndex < buttons.length) {
     // Llamar a la función 'toggleButton' con un retraso de buttonIndex * 200 milisegundos, pasando el botón actual como argumento
     setTimeout(function(button) {
       toggleButton(button);
     }, buttonIndex * 200, buttons[buttonIndex]);
     // Incrementar buttonIndex
     buttonIndex++;
     // Llamar a la función 'applyButtonEffects' después de un retraso de 200 milisegundos
     setTimeout(applyButtonEffects, 200);
   }
  }
 // Llamar a la función 'applyButtonEffects' para comenzar a aplicar los efectos a los botones
 applyButtonEffects();
 // Llamar a la función 'parpadeo' para hacer que los botones parpadeen
 parpadeo();
 // Llamar a la función 'enlargeNextImage' para comenzar a ampliar las imágenes  
}
function parpadeo() {
 var buttons = document.getElementsByClassName('button');
 for (var i = 0; i < buttons.length; i++) {
   setTimeout(function(button) {
     toggleButton(button);
   }, i * 200, buttons[i]);
 }
}

function toggleButton(button) {
 button.classList.toggle('enlarged');
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FULL SCREEN IMAGENES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
document.addEventListener('DOMContentLoaded', function () {
 const imagenesFullscreen = document.querySelectorAll('.imagen-fullscreen');
 const fullscreenContainer = document.getElementById('imagen-fullscreen-container');

 imagenesFullscreen.forEach(function (imagen) {
   imagen.addEventListener('click', function () {
     // Clonar la imagen seleccionada para mostrarla en pantalla completa
     const imagenClonada = imagen.cloneNode(true);
     imagenClonada.classList.add('imagen-fullscreen-full');
     fullscreenContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar la imagen
     fullscreenContainer.appendChild(imagenClonada);

     // Mostrar el contenedor de imagen en pantalla completa
     fullscreenContainer.style.display = 'block';
   });
 });

 // Agregar evento de clic al contenedor de imagen en pantalla completa para cerrarlo
 fullscreenContainer.addEventListener('click', function () {
   // Ocultar el contenedor de imagen en pantalla completa
   fullscreenContainer.style.display = 'none';
 });
});

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FULL SCREEN VIDEOS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let pausedAudios = []; // Arreglo para almacenar los elementos de audio en pausa



function toggleFullscreenAndPlay(videoId) {
  // Pausar audios activos
  const audioElements = document.getElementsByTagName('audio');
  for (const audio of audioElements) {
    if (!audio.paused && !pausedAudios.includes(audio)) {
      audio.pause();
      pausedAudios.push(audio);
    }
  }

  const video = document.getElementById(videoId);
  if (!video) return;

  // Si el video está en pausa → reproducir y entrar en fullscreen
  if (video.paused) {
    video.play();
    entrarFullscreen(video);
  } else {
    salirFullscreen(video);
  }
}

function entrarFullscreen(video) {
  const fs = video.requestFullscreen || video.webkitRequestFullscreen || video.mozRequestFullScreen || video.msRequestFullscreen;
  if (fs) {
    fs.call(video).then(() => aplicarEstilosFullscreen(video));
  } else {
    aplicarEstilosFullscreen(video);
  }
}

function aplicarEstilosFullscreen(video) {
  video.style.width = '100vw';
  video.style.height = '100vh';
  video.style.objectFit = 'contain';
  video.style.backgroundColor = 'black';
}

function salirFullscreen(video) {
  const exitFs = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
  const restore = () => {
    // Reanudar audios pausados
    for (const audio of pausedAudios) audio.play();
    pausedAudios = [];

    // Pausar y reiniciar el video
    video.pause();
    video.currentTime = 0;

    // Restaurar estilos originales
    video.style.width = '';
    video.style.height = '';
    video.style.objectFit = '';
    video.style.backgroundColor = '';
  };

  if (exitFs) {
    exitFs.call(document).then(restore);
  } else {
    restore();
  }
}


// Recorre todos los elementos de video presentes en la página
const videoElements = document.getElementsByTagName('video');
for (let i = 0; i < videoElements.length; i++) {
 // Agrega un evento de escucha ('touchend') a cada video
 videoElements[i].addEventListener('touchend', function (event) {
   // Comprueba si el video actual está en modo de pantalla completa
   if (
     (document.fullscreenElement && document.fullscreenElement === this) || // Comprobación para navegadores estándar
     (document.webkitFullscreenElement && document.webkitFullscreenElement === this) || // Comprobación para navegadores WebKit (como Safari y Chrome)
     (document.mozFullScreenElement && document.mozFullScreenElement === this) || // Comprobación para navegadores Firefox (anterior a versión 64)
     (document.msFullscreenElement && document.msFullscreenElement === this) // Comprobación para navegadores Microsoft Edge
   ) {
     // Previene el comportamiento predeterminado del evento touchend
     event.preventDefault();
     // Llama a la función toggleFullscreenAndPlay, pasando como argumento el ID del video actual
     toggleFullscreenAndPlay(this.id);    
   }
 });
}


function ajustarTamañoImagen(idPadre, ancho, alto) {
  const contenedor = document.querySelector(
    `#${idPadre} .contVideosWrapper .contenedor-secundario`
  );
  const imagen = contenedor?.querySelector('.imagen-fullscreen');
  if (!contenedor || !imagen) return;

  contenedor.style.width = ancho + 'px';
  contenedor.style.height = alto + 'px';
  contenedor.style.overflow = 'hidden';

  imagen.style.width = '100%';
  imagen.style.height = '100%';
  imagen.style.objectFit = 'fill'; // fuerza adaptación exacta
  imagen.style.objectPosition = 'center';
}
