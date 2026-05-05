import '@sass/main.scss';

const colores = [
  "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", 
  "#1ABC9C", "#E74C3C", "#2ECC71", "#3498DB", "#7F8C8D",
  "#FF9F43", "#0ABDE3", "#EE5253", "#10AC84", "#5F27CD"
];

const btn = document.getElementById("btn-color");
const bgElement = document.querySelector('.exercise1');

btn.addEventListener("click", () => {
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  bgElement.style.backgroundColor = colorAleatorio;
});
