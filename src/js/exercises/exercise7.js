import '@sass/main.scss';

const inputLongitud = document.getElementById("longitud");
const btnGenerar = document.getElementById("btn-generar");
const resultado = document.getElementById("resultado");
const btnCopiar = document.getElementById("btn-copiar");

const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const especiales = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const todosLosCaracteres = minusculas + mayusculas + numeros + especiales;

function obtenerCaracterAleatorio(caracteres) {
  const posicion = Math.floor(Math.random() * caracteres.length);
  return caracteres[posicion];
}

function mezclarTexto(texto) {
  const caracteres = texto.split("");
  for (let i = caracteres.length - 1; i > 0; i--) {
    const posicionAleatoria = Math.floor(Math.random() * (i + 1));
    const temporal = caracteres[i];
    caracteres[i] = caracteres[posicionAleatoria];
    caracteres[posicionAleatoria] = temporal;
  }
  return caracteres.join("");
}

function generarPassword(longitud) {
  let password = "";
  password += obtenerCaracterAleatorio(minusculas);
  password += obtenerCaracterAleatorio(mayusculas);
  password += obtenerCaracterAleatorio(numeros);
  password += obtenerCaracterAleatorio(especiales);

  for (let i = password.length; i < longitud; i++) {
    password += obtenerCaracterAleatorio(todosLosCaracteres);
  }

  return mezclarTexto(password);
}

// Escuchar el click del botón generar
btnGenerar.addEventListener("click", () => {
  const valorLongitud = inputLongitud.value;

  if (valorLongitud === "") {
    resultado.textContent = "Introduce una longitud";
    resultado.classList.add('exercise7__result--error');
    btnCopiar.disabled = true;
    return;
  }

  const longitud = Number(valorLongitud);

  if (longitud < 4 || longitud > 50) {
    resultado.textContent = "Longitud entre 4 y 50";
    resultado.classList.add('exercise7__result--error');
    btnCopiar.disabled = true;
    return;
  }

  resultado.classList.remove('exercise7__result--error');
  const password = generarPassword(longitud);
  resultado.textContent = password;
  btnCopiar.disabled = false;
  
  // Animación de aparición
  resultado.classList.remove('active');
  void resultado.offsetWidth;
  resultado.classList.add('active');
});

// Lógica para copiar al portapapeles
btnCopiar.addEventListener("click", () => {
  const password = resultado.textContent;
  
  navigator.clipboard.writeText(password).then(() => {
    const icon = btnCopiar.querySelector('i');
    icon.classList.replace('fa-copy', 'fa-check');
    btnCopiar.classList.add('success');
    
    setTimeout(() => {
      icon.classList.replace('fa-check', 'fa-copy');
      btnCopiar.classList.remove('success');
    }, 2000);
  });
});
