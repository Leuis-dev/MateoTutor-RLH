import { useState } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import DQ2 from "../components/lvltutor/Tools/DQ2";
import { withAuth } from "../components/Auth";
import { sessionState } from "../components/SessionState";

export default withAuth(function SelectByCode() {
  const [showExercise, setShowExercise] = useState(false);
  const [content, setContent] = useState(null); // Estado para el contenido

   // Función para manejar el clic del botón
  const handleShowExercise = async () => {
    
    // PARA GRAFANA Y PROMETEUS ###############################
    // Llama a la API para incrementar el contador
    try {
      await fetch('/api/increment', { method: 'POST' });
    } catch (error) {
      console.error('Error al reportar clic a Prometheus:', error);
    }
    //FIN DE GRAFANA Y PROMETEUS ##############################

    // 2. Actualiza el estado del contenido
    setContent(sessionState.currentContent); // Actualizar el estado del contenido al hacer clic en el botón
    setShowExercise(true); // Mantener el estado para mostrar el contenido
  };

  return (
    <>
      <div>
        <DQ2/>
      </div>

      <div>
        {/* El botón siempre visible */}
        <Button onClick={handleShowExercise} mb={4}>
          Mostrar Ejercicio
        </Button>

        {/* Mostrar el contenido o el mensaje dependiendo de showExercise y del contenido */}
        {showExercise && (
          <div>
            {content && content.json ? (
              <Box as="pre" bg="gray.100" p={4} borderRadius="md">
                {JSON.stringify(content.json, null, 2)}
              </Box>
            ) : (
              <Text>No se encontró ningún contenido para mostrar</Text>
            )}
          </div>
        )}
      </div>
    </>
  );
});
