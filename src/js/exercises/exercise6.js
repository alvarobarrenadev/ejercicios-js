import '@sass/main.scss';

// Seleccionar el texto donde se muestra el temporizador
const temporizador = document.getElementById("temporizador");

// Seleccionar los botones
const btnIniciar = document.getElementById("btn-iniciar");
const btnPausar = document.getElementById("btn-pausar");
const btnReiniciar = document.getElementById("btn-reiniciar");

// Crear una variable para guardar los segundos totales
let segundosTotales = 0;

// Crear una variable para guardar el intervalo
let intervalo = null;

// Formatear el tiempo en formato 00:00:00
function formatearTiempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  const horasFormateadas = String(horas).padStart(2, "0");
  const minutosFormateados = String(minutos).padStart(2, "0");
  const segundosFormateados = String(segundosRestantes).padStart(2, "0");

  return `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
}

// Actualizar el texto del temporizador
function actualizarTemporizador() {
  temporizador.textContent = formatearTiempo(segundosTotales);
  
  // Efecto sutil de pulso en cada segundo
  temporizador.classList.remove('tick');
  void temporizador.offsetWidth; // Trigger reflow
  temporizador.classList.add('tick');
}

// Escuchar el click del botón "Iniciar"
btnIniciar.addEventListener("click", () => {
  if (intervalo !== null) return;

  btnIniciar.classList.add('active');
  btnPausar.classList.remove('active');

  intervalo = setInterval(() => {
    segundosTotales++;
    actualizarTemporizador();
  }, 1000);
});

// Escuchar el click del botón "Pausar"
btnPausar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  
  btnIniciar.classList.remove('active');
  btnPausar.classList.add('active');
});

// Escuchar el click del botón "Reiniciar"
btnReiniciar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  segundosTotales = 0;
  actualizarTemporizador();
  
  btnIniciar.classList.remove('active');
  btnPausar.classList.remove('active');
});