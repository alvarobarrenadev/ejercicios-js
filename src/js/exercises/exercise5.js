import '@sass/main.scss';

// Seleccionar los dos campos de número
const inputNum1 = document.getElementById("numero1");
const inputNum2 = document.getElementById("numero2");

// Seleccionar los botones de operaciones
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");
const btnMultiplicar = document.getElementById("btn-multiplicar");
const btnDividir = document.getElementById("btn-dividir");

// Seleccionar el elemento donde se mostrará el resultado
const resultado = document.getElementById("resultado");

// Función para obtener y validar los datos
const obtenerNumeros = () => {
  const valor1 = inputNum1.value;
  const valor2 = inputNum2.value;

  if (valor1 === "" || valor2 === "") {
    resultado.textContent = "¡Error! Introduce ambos números.";
    resultado.classList.add('exercise5__result--error');
    return null;
  }

  resultado.classList.remove('exercise5__result--error');
  return {
    n1: Number(valor1),
    n2: Number(valor2)
  };
}

// Función para mostrar el resultado con estilo
const mostrarResultado = (valor) => {
  // Redondeamos a 2 decimales si no es entero
  const valorFinal = Number.isInteger(valor) ? valor : valor.toFixed(2);
  resultado.textContent = `Resultado: ${valorFinal}`;
};

// Listeners
btnSumar.addEventListener("click", () => {
  const nums = obtenerNumeros();
  if (nums) mostrarResultado(nums.n1 + nums.n2);
});

btnRestar.addEventListener("click", () => {
  const nums = obtenerNumeros();
  if (nums) mostrarResultado(nums.n1 - nums.n2);
});

btnMultiplicar.addEventListener("click", () => {
  const nums = obtenerNumeros();
  if (nums) mostrarResultado(nums.n1 * nums.n2);
});

btnDividir.addEventListener("click", () => {
  const nums = obtenerNumeros();
  if (!nums) return;

  if (nums.n2 === 0) {
    resultado.textContent = "No se puede dividir por cero";
    resultado.classList.add('exercise5__result--error');
    return;
  }

  mostrarResultado(nums.n1 / nums.n2);
});