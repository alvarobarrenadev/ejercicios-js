import '@sass/main.scss';

const animales = [
  "Perro", "Gato", "Pez", "Loro", "Conejo", 
  "Tortuga", "Hamster", "León", "Tigre", "Elefante",
  "Jirafa", "Cebra", "Panda", "Koala", "Pingüino"
];

const buscador = document.getElementById("buscador");
const lista = document.getElementById("lista");

// Función para pintar los elementos en pantalla
const mostrarAnimales = (animalesFiltrados) => {
  // Limpiar la lista antes de volverla a pintar
  lista.innerHTML = "";

  if (animalesFiltrados.length === 0) {
    const emptyMsg = document.createElement("li");
    emptyMsg.className = "exercise4__empty-msg";
    emptyMsg.textContent = "No se encontraron animales";
    lista.appendChild(emptyMsg);
    return;
  }

  // Recorrer los animales filtrados
  animalesFiltrados.forEach((animal) => {
    const li = document.createElement("li");
    li.className = "exercise4__item";
    
    // Añadimos un pequeño delay aleatorio para el efecto de entrada
    li.style.animationDelay = `${Math.random() * 0.2}s`;
    
    li.innerHTML = `
      <i class="fa-solid fa-paw exercise4__item-icon"></i>
      <span class="exercise4__item-name">${animal}</span>
    `;
    lista.appendChild(li);
  });
};

// Mostrar todos los animales al cargar la página
mostrarAnimales(animales);

// Escuchar cada cambio dentro del input
buscador.addEventListener("input", () => {
  // Obtener el texto escrito por el usuario
  const textoBusqueda = buscador.value.toLowerCase();

  // Filtrar animales que contienen el texto escrito
  const animalesFiltrados = animales.filter((animal) => {
    return animal.toLowerCase().includes(textoBusqueda);
  });

  // Mostrar solo los animales filtrados
  mostrarAnimales(animalesFiltrados);
});