
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const puntajeTexto = document.getElementById('puntaje');
const recordTexto = document.getElementById('record');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');
const gameForm = document.getElementById('gameForm');

let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let historialIntentos = [];
let puntaje = 100;
let recordPersonal = 0;

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

function actualizarPuntaje() {
  puntajeTexto.textContent = 'Puntaje: ' + puntaje;
}

function obtenerPista(diferencia) {
  if (diferencia <= 5) {
    return 'Estás cerca.';
  } else if (diferencia <= 10) {
    return 'Vas bien.';
  } else {
    return 'Estás lejos.';
  }
}

function verificarIntento() {
  const valor = Number(inputIntento.value);

  if (isNaN(valor) || valor < 1 || valor > 100) {
    mostrarMensaje('⚠️ Ingresa un número válido del 1 al 100', 'orange');
    inputIntento.focus();
    return;
  }

  if (historialIntentos.includes(valor)) {
    mostrarMensaje('⚠️ Ya intentaste ese número. Prueba otro.', 'orange');
    inputIntento.value = '';
    inputIntento.focus();
    return;
  }

  intentos++;
  contador.textContent = 'Intentos: ' + intentos;

  historialIntentos.push(valor);
  historial.textContent = 'Historial: ' + historialIntentos.join(', ');

  const diferencia = Math.abs(valor - numeroSecreto);

  if (valor === numeroSecreto) {
    mostrarMensaje('🎉 ¡Correcto! Era el ' + numeroSecreto, '#00ff88');
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = 'inline-block';

    tarjeta.style.borderColor = '#00ff88';
    tarjeta.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.3)';

    if (puntaje > recordPersonal) {
      recordPersonal = puntaje;
      recordTexto.textContent = 'Récord personal: ' + recordPersonal;
    }
  } else {
    puntaje = Math.max(0, puntaje - 10);
    actualizarPuntaje();

    if (valor > numeroSecreto) {
      mostrarMensaje('📈 Muy alto. ' + obtenerPista(diferencia), '#ff6b6b');
    } else {
      mostrarMensaje('📉 Muy bajo. ' + obtenerPista(diferencia), '#4ecdc4');
    }
  }

  inputIntento.value = '';
  inputIntento.focus();
}

function reiniciarJuego() {
  numeroSecreto = generarNumeroSecreto();
  console.log('Nuevo número secreto:', numeroSecreto);

  intentos = 0;
  historialIntentos = [];
  puntaje = 100;

  contador.textContent = 'Intentos: 0';
  historial.textContent = 'Historial:';
  actualizarPuntaje();
  mostrarMensaje('🎯 ¡Nuevo juego! Adivina el número...', '#e94560');

  btnAdivinar.disabled = false;
  btnReiniciar.style.display = 'none';
  inputIntento.value = '';
  inputIntento.focus();

  tarjeta.style.borderColor = 'rgba(233, 69, 96, 0.3)';
  tarjeta.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
}

mostrarMensaje('¡Bienvenido al juego!', '#e94560');
actualizarPuntaje();
recordTexto.textContent = 'Récord personal: ' + recordPersonal;

if (gameForm) {
  gameForm.addEventListener('submit', function (evento) {
    evento.preventDefault();
    verificarIntento();
  });
} else {
  btnAdivinar.addEventListener('click', verificarIntento);
}

btnReiniciar.addEventListener('click', reiniciarJuego);




