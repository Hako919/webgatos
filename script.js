// JavaScript - Funcionalidad de nuestra web

// Array con URLs de imágenes de gatos
const imagenesGatos = [
  'https://cataas.com/cat?width=400&height=300',
  'https://cataas.com/cat/cute?width=400&height=300',
  'https://cataas.com/cat/kitten?width=400&height=300',
  'https://cataas.com/cat/orange?width=400&height=300',
  'https://cataas.com/cat/black?width=400&height=300'
];

// Array con datos curiosos sobre gatos
const datosCuriosos = [
  "Los gatos pueden hacer más de 100 sonidos diferentes, mientras que los perros solo pueden hacer 10.",
  "Un gato pasa entre 12 y 16 horas al día durmiendo.",
  "Los gatos no pueden saborear lo dulce.",
  "El ronroneo de un gato puede ayudar a sanar huesos rotos.",
  "Los gatos tienen un tercer párpado llamado membrana nictitante.",
  "Un grupo de gatos se llama 'clowder'.",
  "Los gatos pueden saltar hasta 6 veces su longitud.",
  "Los bigotes de los gatos les ayudan a determinar si pueden pasar por un espacio."
];

// Colores para cambiar el fondo
const colores = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
];

let contadorGatos = 0;
let colorActual = 0;

// Función para mostrar un gato aleatorio
function mostrarGato() {
  const imagen = document.getElementById('gatoImagen');
  const indiceAleatorio = Math.floor(Math.random() * imagenesGatos.length);
  
  // Añadir timestamp para evitar cache
  imagen.src = imagenesGatos[indiceAleatorio] + '&t=' + new Date().getTime();
  imagen.classList.remove('show');
  
  // Pequeño delay para la animación
  setTimeout(() => {
    imagen.classList.add('show');
  }, 100);

  // Incrementar contador
  contadorGatos++;
  document.getElementById('contador').textContent = contadorGatos;
}

// Función para mostrar un dato curioso
function mostrarDato() {
  const contenedor = document.getElementById('datosCuriosos');
  const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
  
  // Limpiar datos anteriores
  contenedor.innerHTML = '';
  
  // Crear nuevo elemento para el dato
  const datoElemento = document.createElement('div');
  datoElemento.className = 'fact';
  datoElemento.textContent = datosCuriosos[indiceAleatorio];
  
  contenedor.appendChild(datoElemento);
  
  // Mostrar con animación
  setTimeout(() => {
    datoElemento.classList.add('show');
  }, 100);
}

// Función para cambiar el color de fondo
function cambiarColor() {
  colorActual = (colorActual + 1) % colores.length;
  document.body.style.background = colores[colorActual];
}

// Mostrar un gato al cargar la página
window.onload = function() {
  mostrarGato();
  mostrarDato();
};