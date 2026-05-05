import '@sass/main.scss';

const inputTexto = document.getElementById("input-texto");
const btnAgregar = document.getElementById("btn-agregar");
const lista = document.getElementById("lista");

// Función para crear un nuevo elemento en la lista
const crearElemento = (texto) => {
  const li = document.createElement("li");
  li.className = "exercise3__item";
  
  const span = document.createElement("span");
  span.className = "exercise3__item-text";
  span.textContent = texto;
  
  const btnEliminar = document.createElement("button");
  btnEliminar.className = "exercise3__item-delete";
  btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  btnEliminar.setAttribute("aria-label", "Eliminar elemento");
  
  btnEliminar.addEventListener("click", () => {
    li.classList.add('exercise3__item--removing');
    li.addEventListener('animationend', () => li.remove());
  });
  
  li.appendChild(span);
  li.appendChild(btnEliminar);
  
  return li;
};

// Evento click para agregar
btnAgregar.addEventListener("click", () => {
  const texto = inputTexto.value.trim();

  if (texto === "") {
    inputTexto.classList.add('exercise3__input--error');
    setTimeout(() => inputTexto.classList.remove('exercise3__input--error'), 500);
    return;
  }

  const nuevoElemento = crearElemento(texto);
  lista.appendChild(nuevoElemento);
  
  inputTexto.value = "";
  inputTexto.focus();
});

// Permitir agregar con la tecla Enter
inputTexto.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btnAgregar.click();
  }
});