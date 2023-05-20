// DESAFÍO 1

// DESAFÍO 2

const fs = require("fs"); //Importamos el módulo fs para leer y escribir archivos
const path = require("path"); //Importamos el módulo path para trabajar con rutas de archivos

//Definimos la función auxiliar rotateWord para rotar una palabra según un abecedario circular
function rotarPalabra(palabra, rotacion) {
  const abecedarioCircular = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ"; // Definimos el abecedario circular
  const arrayAbecedario = abecedarioCircular.split(""); // Convertimos el abecedario circular en un array
  const arrayPalabra = palabra.split(""); // Convertimos la palabra en un array
  const palabraRotada = arrayPalabra
    .map((letra) => {
      // Rotamos la palabra
      if (!arrayAbecedario.includes(letra.toUpperCase())) {
        // Si el caracter no está en el abecedario circular, lo dejamos igual
        return letra;
      }
      const indiceOriginal = abecedarioCircular.indexOf(letra.toUpperCase()); // Buscamos el índice del caracter en el abecedario circular
      const indiceNuevo =
        (indiceOriginal + rotacion) % abecedarioCircular.length; // Calculamos el nuevo índice, considerando el caracter circular del abecedario
      const letraRotada = abecedarioCircular.charAt(indiceNuevo); // Buscamos el nuevo caracter en el abecedario circular
      const letraFinal =
        letra === letra.toUpperCase() ? letraRotada : letraRotada.toLowerCase(); // Revisamos si estaba en mayúscula antes o no
      return letraFinal;
    })
    .join(""); // Convertimos el array de la palabra rotada en un string
  return palabraRotada; // Retornamos la palabra rotada
}

//Definimos la función encrypt para cifrar un archivo
function encriptar(rotacion, ruta_relativa, entrada) {
  const rutaArchivoEntrada = path.join(ruta_relativa, entrada); //Definimos la ruta del archivo de entrada
  const rutaArchivoSalida = path.join(
    //Definimos la ruta del archivo de salida
    ruta_relativa,
    path.parse(rutaArchivoEntrada).name + "_cifrado" + path.extname(rutaArchivoEntrada) //Le agregamos "_cifrado" al nombre del archivo de entrada y mantenemos la extensión
  );
  fs.readFile(rutaArchivoEntrada, "utf8", (err, data) => {
    //Leemos el archivo de entrada
    if (err) {
      console.error(`Error leyendo el archivo: ${err}`);
    } else {
      const entradaRotada = rotarPalabra(data, rotacion); //Rotamos el contenido del archivo
      fs.writeFile(rutaArchivoSalida, entradaRotada, (err) => { //Escribimos el archivo de salida
        if (err) {
          console.error(`Error escribiendo en archivo: ${err}`);
        } else {
          console.log(`Mensaje cifrado guardado en: ${rutaArchivoSalida}`);
        }
      });
    }
  });
}


// Definimos las variables de entrada. Estos valores pueden ser modificados para probar el programa
const rotacion = 1;
const ruta_relativa = "../tests_2";
const entrada = "T0.txt";

// Ejecutamos la función encriptar
encriptar(rotacion, ruta_relativa, entrada);