const data = require("../tests_1/data.js"); //Importamos el archivo data.js
const {
  abrirSistemas,
  cerrarSistemas,
  restriccionesSanitarias,
  emiteCertificado,
} = require("../planificacion"); //Importamos las funciones del archivo planificacion.js

const delay = 3500; // Tiempo que demora en abrirse el sistema. Este valor puede ser modificado para probar el código. Valores menores a 3300 no permitirán abrir el sistema.
const codigo = "ZAB97"; // Código de destino a buscar. Este valor puede ser modificado para probar el código. Debe seguir el formato correcto, en caso contrario, el sistema no permitirá continuar.

// Utilizamos esta función para verificar que el código tenga el formato correcto.
function verificarCodigo(codigo) {
  const formato = /^[A-Z]{3}\d{2}$/; //El formato es de 3 letras mayúsculas seguidas de 2 números
  return formato.test(codigo); //Retorna true si el código cumple con el formato, false en caso contrario
}

// Utilizamos esta función para buscar el código en el archivo data.js
function buscarCodigo(codigo) {
  return new Promise((resolve, reject) => {
    const resultado = data.find((elemento) => elemento.codigo === codigo); //Buscamos el código en el archivo data.js
    if (resultado) {
      //Si el código existe, retornamos el destino y la restricción
      resolve({
        destino: resultado.destino,
        restriccion: resultado.restriccion,
      });
    } else {
      reject("Código no encontrado en la base de datos"); //Si el código no existe, retornamos un mensaje de error
    }
  });
}

// Aquí comienza el proceso
// 1. Abrir sistemas
abrirSistemas(delay) //Modifique el valor del delay para probar el código
  .then((resultado) => {
    if (resultado) {
      //Si el sistema se abrió correctamente, continuamos con el proceso
      // 2. Revisamos que el codigo de destino tenga el formato válido
      if (verificarCodigo(codigo)) {
        console.log(`El código ${codigo} tiene el formato correcto`);
        // 3. Buscamos el código en el archivo data.js
        buscarCodigo(codigo).then((resultado) => {
          // 4. mostramos en consola el destino y la restricción
          const { destino, restriccion } = resultado;
          console.log("Destino: " + destino);
          console.log("Restricción: " + restriccion);
          // 5. Revisamos si hay restricciones sanitarias, si es que no hay, emitimos el certificado
          restriccionesSanitarias(restriccion, destino).then((resultado) => {
            if (resultado.restriccion) {
              console.log(resultado.status);
              emiteCertificado(destino)
                .then((resultado) => {
                  console.log(resultado.status);
                  cerrarSistemas(); //Cerramos los sistemas para finalizar el proceso en caso que todo haya salido bien
                })
                .catch((error) => {
                  console.log(error);
                  cerrarSistemas();
                });
            } else {
              console.log(resultado); //Si hay restricciones sanitarias, mostramos el mensaje de error
              cerrarSistemas();
            }
          });
        });
      } else {
        console.log("El código no tiene el formato correcto");
        cerrarSistemas();
      }
    } else {
      cerrarSistemas(); //Si el sistema no se abrió correctamente, cerramos los sistemas para finalizar el proceso
    }
  })
  .catch((error) => {
    console.log(error);
  });
