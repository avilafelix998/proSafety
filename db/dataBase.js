// Simulación de base de datos
export const preguntasDB = [
    {
      id: 1,
      texto: "¿Utilizas protección y medidas de prevención para golpes en tu trabajo?",
      respuestaCorrecta: "sí"
    },
    {
      id: 2,
      texto: "¿Usas casco de seguridad en tu área de trabajo?",
      respuestaCorrecta: "sí"
    },
    {
      id: 3,
      texto: "¿Realizas chequeos de seguridad antes de operar maquinaria pesada?",
      respuestaCorrecta: "sí"
    },
    {
      id: 4,
      texto: "¿Permites que se fume en áreas de trabajo con materiales inflamables?",
      respuestaCorrecta: "no"
    }
  ];
  
  // Función para obtener todas las preguntas
  export function obtenerPreguntas() {
    return preguntasDB;
  }
  
  // Función para validar respuesta
  export function validarRespuesta(idPregunta, respuestaUsuario) {
    const pregunta = preguntasDB.find(p => p.id === idPregunta);
    return (pregunta && pregunta.respuestaCorrecta === respuestaUsuario.toLowerCase()) ? 1 : 0;
  }
  