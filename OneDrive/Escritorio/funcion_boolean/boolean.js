import { obtenerPreguntas, validarRespuesta } from './preguntasDB.js';

// Variable global para llevar el índice de la pregunta actual
let indicePregunta = 0;
const preguntas = obtenerPreguntas(); // Obtén todas las preguntas

// Función para mostrar la pregunta actual
function mostrarPregunta() {
  if (indicePregunta < preguntas.length) {
    const pregunta = preguntas[indicePregunta];
    document.getElementById('pregunta').textContent = pregunta.texto;
  } else {
    // Si ya no hay más preguntas, muestra un mensaje
    document.getElementById('pregunta').textContent = "fin del test";
    document.getElementById('formulario').style.display = 'none'; // Oculta el formulario
  }
}

// Llamada para mostrar la primera pregunta al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  mostrarPregunta();
});

// Función para manejar el envío del formulario
window.manejarEnvio = function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  const idPregunta = preguntas[indicePregunta].id; // Obtener ID de la pregunta actual
  const respuestaUsuario = document.querySelector('input[name="respuesta"]:checked').value;

  const resultado = validarRespuesta(idPregunta, respuestaUsuario);

  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  console.log(respuestaUsuario);
  console.log(resultado);

  // Mueve al siguiente índice de pregunta
  indicePregunta++;

  // Muestra la siguiente pregunta o un mensaje final si se han terminado las preguntas
  mostrarPregunta();
};
