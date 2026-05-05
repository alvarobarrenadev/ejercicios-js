import '@sass/main.scss';

const inputTarea = document.getElementById("input-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const listaTareas = document.getElementById("lista-tareas");
const btnLimpiar = document.getElementById("btn-limpiar");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrarTareas() {
  listaTareas.innerHTML = "";

  if (tareas.length === 0) {
    listaTareas.innerHTML = '<li class="exercise9__empty">No hay tareas pendientes</li>';
    return;
  }

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.className = `exercise9__item ${tarea.completada ? 'exercise9__item--completed' : ''}`;

    const checkboxWrapper = document.createElement("label");
    checkboxWrapper.className = "exercise9__checkbox-container";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "exercise9__checkbox";
    checkbox.checked = tarea.completada;

    const checkmark = document.createElement("span");
    checkmark.className = "exercise9__checkmark";

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(checkmark);

    const span = document.createElement("span");
    span.className = "exercise9__item-text";
    span.textContent = tarea.texto;

    checkbox.addEventListener("change", () => {
      tareas[index].completada = checkbox.checked;
      guardarTareas();
      mostrarTareas();
    });

    li.appendChild(checkboxWrapper);
    li.appendChild(span);
    listaTareas.appendChild(li);
  });
}

btnAgregar.addEventListener("click", () => {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    inputTarea.classList.add('exercise9__input--error');
    setTimeout(() => inputTarea.classList.remove('exercise9__input--error'), 500);
    return;
  }

  const nuevaTarea = {
    texto: texto,
    completada: false,
  };

  tareas.push(nuevaTarea);
  guardarTareas();
  mostrarTareas();
  inputTarea.value = "";
  inputTarea.focus();
});

// Permitir agregar con Enter
inputTarea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") btnAgregar.click();
});

btnLimpiar.addEventListener("click", () => {
  tareas = tareas.filter((tarea) => !tarea.completada);
  guardarTareas();
  mostrarTareas();
});

mostrarTareas();