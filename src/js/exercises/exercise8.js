import '@sass/main.scss';

const textarea = document.getElementById("texto");
const contadorCaracteres = document.getElementById("contador-caracteres");
const contadorPalabras = document.getElementById("contador-palabras");

textarea.addEventListener("input", () => {
  const texto = textarea.value;
  
  // Contar caracteres (con espacios)
  const totalCaracteres = texto.length;
  
  // Contar palabras
  const textoLimpio = texto.trim();
  let numeroPalabras = 0;
  if (textoLimpio !== "") {
    numeroPalabras = textoLimpio.split(/\s+/).length;
  }

  // Actualizar la interfaz
  contadorCaracteres.textContent = `Caracteres: ${totalCaracteres}`;
  contadorPalabras.textContent = `Palabras: ${numeroPalabras}`;
  
  // Animación suave de los contadores
  [contadorCaracteres, contadorPalabras].forEach(el => {
    el.parentElement.classList.remove('active');
    void el.offsetWidth;
    el.parentElement.classList.add('active');
  });
});