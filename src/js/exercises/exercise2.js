import '@sass/main.scss';

let clics = 0;
const textoContador = document.getElementById("contador");
const btn = document.getElementById("btn-contar");

btn.addEventListener("click", () => {
  clics++;
  textoContador.textContent = clics;
  
  // Efecto visual al incrementar
  textoContador.classList.remove('bump');
  void textoContador.offsetWidth; // Trigger reflow
  textoContador.classList.add('bump');
});