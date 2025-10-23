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
 var audios = document.getElementsByTagName('audio');
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
          
}
function detenerReproduccionAudios() {
  var audios = document.getElementsByTagName("audio");
  for (var i = 0; i < audios.length; i++) {
    audios[i].pause();
    audios[i].currentTime = 0;
  }
}
function irContenedorAnterior() {

  var contenedorActual = document.getElementById(idsArray[idsArray.length - 1]);
  contenedorActual.style.display = 'none';

  var previousElementID = idsArray[idsArray.length - 2];
  var contenedorAnterior = document.getElementById(previousElementID);
  if(
    contenedorAnterior.className==='descripcion' || 
    contenedorAnterior.className==='botones'){
    contenedorAnterior.style.display = 'flex'
  }else{                                          
  contenedorAnterior.style.display = 'grid'
  }

    Array.from(contenedorAnterior.querySelectorAll('*')).forEach(hijo => {
    hijo.style.display = '';
    hijo.style.visibility = 'visible';
    hijo.style.opacity = '1';
  });


  idsArray.pop();
  console.log(idsArray)

  currentID = previousElementID;
  /* if(currentID==='descripcion-olga')alert() */

  if (idsArray.length === 1) {
    detenerReproduccionAudios();
  }
}

function hideBotDescrip(elementId, buttonId) {
  const img = document.getElementById(buttonId); 
  img.classList.add('pixelate');

  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
     console.log(idsArray)
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
function hideDescripVideos(elementId) { 

 var elementsToHide = document.querySelectorAll('.botones, .imagenes-i'); 
 for (var i = 0; i < elementsToHide.length; i++) { 
   elementsToHide[i].style.display = 'none';
 }
 var contenedoresPadre = document.getElementsByClassName('descripcion');
 for (var i = 0; i < contenedoresPadre.length; i++) {
   contenedoresPadre[i].style.display = 'none';
 } 

  const padre = document.getElementById(elementId)

  padre.style.display = 'grid';
    Array.from(padre.querySelectorAll('*')).forEach(hijo => {
    hijo.style.display = '';
    hijo.style.visibility = 'visible';
    hijo.style.opacity = '1';
  });







  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }
}
function hideDescripFotos(elementId) {    
 var elementsToHide = document.querySelectorAll('.botones, .video-v');
 for (var i = 0; i < elementsToHide.length; i++) { 
   elementsToHide[i].style.display = 'none';
 }
 var contenedoresPadre = document.getElementsByClassName('descripcion');  
 for (var i = 0; i < contenedoresPadre.length; i++) {
   contenedoresPadre[i].style.display = 'none';
 }
 var videoOlga = document.getElementById(elementId);
 videoOlga.style.display = 'grid';

  /* if (elementId === 'imagenes-abuelos') {
    let abuelos = document.querySelector('#imagenes-abuelos');

    abuelos.style.position = 'absolute';   // o absolute según tu layout
    abuelos.style.top = '-50vh';
    abuelos.style.width = '30vw';
    abuelos.style.height = '50vh';

    // Para centrar contenido dentro de abuelos
    abuelos.style.display = 'flex';
    abuelos.style.justifyContent = 'center';
    abuelos.style.alignItems = 'center';
  } */

 
  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
  }
}
function hideVidImagen(elementId) {
 var elementsToHide = document.querySelectorAll('.botones, .video-v, .video-container');
 for (var i = 0; i < elementsToHide.length; i++) { 
 elementsToHide[i].style.display = 'none';
 }
 var contenedoresPadre = document.getElementsByClassName('descripcion');
 for (var i = 0; i < contenedoresPadre.length; i++) {
 contenedoresPadre[i].style.display = 'none';
 }
 var contImagen = document.getElementById(elementId);
 contImagen.style.display = 'grid'; 


  // Verificar si el elementoId ya está presente en el array
  if (!idsArray.includes(elementId)) {
    idsArray.push(elementId);
    console.log(idsArray)
  }
} 
function hideImagVideo(elementId) { 
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
function hideDescDesc(elementId) { 
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
  solicitarPantallaCompleta()  
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
 console.log(idsArray)

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
/* document.addEventListener('DOMContentLoaded', function () {
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
}); */




document.addEventListener('DOMContentLoaded', function () {
  const imagenesFullscreen = document.querySelectorAll('.imagen-fullscreen');
  const fullscreenContainer = document.getElementById('imagen-fullscreen-container');
  let indiceActual = 0;
  let startX = 0;

  imagenesFullscreen.forEach(function (imagen, i) {
    imagen.addEventListener('click', function () {
      indiceActual = i;
      mostrarImagen(indiceActual);
    });
  });

  function mostrarImagen(indice) {
    const imagen = imagenesFullscreen[indice];
    if (!imagen) return;

    const imagenClonada = imagen.cloneNode(true);
    imagenClonada.classList.add('imagen-fullscreen-full');
    fullscreenContainer.innerHTML = '';
    fullscreenContainer.appendChild(imagenClonada);
    fullscreenContainer.style.display = 'block';
  }

  // Cerrar fullscreen al tocar la imagen
  fullscreenContainer.addEventListener('click', function () {
    fullscreenContainer.style.display = 'none';
  });

  // Soporte táctil para cambiar de imagen
  fullscreenContainer.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  fullscreenContainer.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    // Solo considerar desplazamientos horizontales amplios
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Deslizar a la derecha → imagen anterior
        indiceActual--;
        if (indiceActual < 0) indiceActual = imagenesFullscreen.length - 1;
      } else {
        // Deslizar a la izquierda → siguiente imagen
        indiceActual++;
        if (indiceActual >= imagenesFullscreen.length) indiceActual = 0;
      }
      mostrarImagen(indiceActual);
    }
  });
});



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FULL SCREEN VIDEOS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let pausedAudios = []; // Arreglo para almacenar los elementos de audio en pausa

const videoFlags = new Map(); // key: videoId, value: boolean

// helper: entrar fullscreen garantizado (devuelve Promise que siempre resuelve)
function entrarFullscreen(elem) {
  if (elem.requestFullscreen) elem.requestFullscreen();
  else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
  else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
  else if (elem.msRequestFullscreen) elem.msRequestFullscreen();

  // aplica control visual tras 100 ms
  setTimeout(() => {
    elem.style.objectFit = 'contain';
    elem.style.width = '100vw';
    elem.style.height = '100vh';
    elem.style.backgroundColor = 'black';
  }, 100);
}

function salirFullscreen() {
  if (document.exitFullscreen) document.exitFullscreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
  else if (document.msExitFullscreen) document.msExitFullscreen();

  // restaura estilo
  document.querySelectorAll('video').forEach(v => {
    v.style.width = '';
    v.style.height = '';
    v.style.objectFit = '';
    v.style.backgroundColor = '';
  });
}

function pauseOtherAudios() {
  document.querySelectorAll('audio').forEach(a => { if (!a.paused) a.pause(); });
}

async function handleVideoToggle(video) {
  if (!video) return;
  const id = video.id || video.dataset.vkey || video; // permite pasar id o elemento
  const flag = videoFlags.get(id) || false;

  // Segundo click: si flag true => pausar y salir fullscreen
  if (flag) {
    video.pause();
    // opcional: restaurar audio si lo habías silenciado
    video.muted = false;
    await salirFullscreen();
    videoFlags.set(id, false);
    return;
  }

  // Primer click: marcar flag true y ejecutar secuencia segura
  videoFlags.set(id, true);

  pauseOtherAudios();

  // Intento 1: reproducir dentro del gesto
  try {
    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === 'function') {
      await playPromise; // si funciona, continuamos
      // damos tiempo breve antes de fullscreen para estabilizar
      await new Promise(r => setTimeout(r, 120));
      await entrarFullscreen(video);
      return;
    }
  } catch (err) {
    console.warn('play() lanzó error inicial:', err);
  }

  // Si llegamos aquí, play fue bloqueado o no devolvió promesa. Usamos fallback:
  try {
    await entrarFullscreen(video);
  } catch (e) {
    console.warn('Fallback entrarFullscreen falló:', e);
  }

  // Tras entrar a fullscreen intentar play silenciado
  try {
    video.muted = true;
    const retry = video.play();
    if (retry && typeof retry.then === 'function') {
      await retry;
    }
  } catch (e) {
    console.warn('Reintento play en fullscreen falló:', e);
  }
}

// Asignación de listener a todos los videos (click y touch)
document.querySelectorAll('video').forEach(v => {
  // inicializa flag en false para cada video
  const key = v.id || v.dataset.vkey || v;
  videoFlags.set(key, false);

  const handler = event => {
    // prevenir doble disparo en touch+click si necesario
    event.preventDefault && event.preventDefault();
    handleVideoToggle(v);
  };

  v.addEventListener('click', handler);
  v.addEventListener('touchend', handler, { passive: false });
});



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
function solicitarPantallaCompleta() {
  const docEl = document.documentElement;
  if (docEl.requestFullscreen) {
    docEl.requestFullscreen();
  } else if (docEl.webkitRequestFullscreen) {
    docEl.webkitRequestFullscreen();
  } else if (docEl.msRequestFullscreen) {
    docEl.msRequestFullscreen();
  }
}
