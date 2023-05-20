import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Calculadora.css";
import { cambiarColor } from "../../utils/Calculadora";

function Calculadora() {
  const [output, setOutput] = useState("0");
  const [calculado, setCalculado] = useState(false);

  const manejarTeclaClick = async (event) => {
    cambiarColor(event);
    const tecla = event.target.innerText;
    if (tecla === "AC") {
      setOutput("0");
      setCalculado(false);
    } else if (tecla === "←") {
      if (output.length === 1) {
        setOutput("0");
        setCalculado(false);
      } else {
        if (output == "Error") {
          setOutput("0");
          setCalculado(false);
        } else {
          let outputPrevio = output.slice(0, -1);
          if (outputPrevio.endsWith(".")) {
            outputPrevio = outputPrevio.slice(0, -1);
          }
          setOutput(outputPrevio);
        }
      }
    } else if (tecla === "=") {
      // SUMA Y MULTIPLICACION
      let operador, operacion, url;
      let num1, num2;

      const regex = /(-?\d+(\.\d+)?)([-+×÷])(-?\d+(\.\d+)?)/; // Regex entregado por ChatGPT

      const matches = output.match(regex);

      if (matches) {
        num1 = parseFloat(matches[1]);
        operador = matches[3];
        num2 = parseFloat(matches[4]);
        console.log(num1, operador, num2);
        if (operador === "+") {
          operacion = "suma";
        } else if (operador === "×") {
          operacion = "multiplicacion";
        } else if (operador === "-") {
          operacion = "resta";
        } else if (operador === "÷") {
          operacion = "division";
        }
      } else if (!calculado) {
        setOutput("Error");
        console.log(
          "Error: ",
          "La operación debe contener a un número, seguido de un operador y otro número."
        );
      }

      if (operador === "+" || operador === "×") {
        if (isNaN(num1) || isNaN(num2)) {
          setOutput("Error");
          console.log(
            "Error: ",
            "La operación debe contener a un número, seguido de un operador y otro número."
          );
        } else {
          url = `http://localhost:3000/${operacion}/${num1}/${num2}`;
          try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
              if (data.status === "success") {
                const resultado = data.resultado.toString();
                setOutput(resultado);
              } else if (data.status === "failed") {
                setOutput("Error");
                console.log("Error: ", data.message);
              }
            } else {
              setOutput("Error");
              console.log("Error: ", data.error);
            }
          } catch (error) {
            console.log("Error de fetch: ", error);
          }
        }
      } else if (operador === "-" || operador === "÷") {
        if (isNaN(num1) || isNaN(num2)) {
          setOutput("Error");
          console.log(
            "Error: ",
            "La operación debe contener a un número, seguido de un operador y otro número."
          );
        } else {
          url = `http://localhost:3000/${operacion}`;

          try {
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ num1, num2 }),
            });
            const data = await response.json();

            if (response.ok) {
              if (data.status === "success") {
                const resultado = data.resultado.toString();
                setOutput(resultado);
              } else if (data.status === "failed") {
                setOutput("Error");
                console.log("Error: ", data.message);
              }
            } else {
              setOutput("Error");
              console.log("Error: ", data.error);
            }
          } catch (error) {
            console.log("Error de fetch: ", error);
          }
        }
      }
      setCalculado(true);
    } else if (calculado && !isNaN(parseFloat(tecla))) {
      setOutput(tecla);
      setCalculado(false);
    } else {
      const nuevoOutput = output === "0" ? tecla : output + tecla;
      setOutput(nuevoOutput);
      setCalculado(false);
    }
  };

  const manejarEnter = (event) => {
    if (event.key === "Enter") {
      const botonIgual = document.getElementById("tecla-igual");
      const newEvent = new Event("click", { bubbles: true });
      botonIgual.dispatchEvent(newEvent);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", manejarEnter);
    return () => {
      document.removeEventListener("keydown", manejarEnter);
    };
  }, []);

  return (
    <div className="calculadora">
      <div className="calculadora-output">{output}</div>
      <div className="calculadora-teclas">
        <button
          className="calculadora-tecla calculadora-tecla-operador"
          onClick={manejarTeclaClick}
        >
          +
        </button>
        <button
          className="calculadora-tecla calculadora-tecla-operador"
          onClick={manejarTeclaClick}
        >
          -
        </button>
        <button
          className="calculadora-tecla calculadora-tecla-operador"
          onClick={manejarTeclaClick}
        >
          &times;
        </button>
        <button
          className="calculadora-tecla calculadora-tecla-operador"
          onClick={manejarTeclaClick}
        >
          ÷
        </button>

        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          7
        </button>
        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          8
        </button>
        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          9
        </button>

        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          4
        </button>
        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          5
        </button>
        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          6
        </button>

        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          1
        </button>
        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          2
        </button>
        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          3
        </button>

        <button className="calculadora-tecla" onClick={manejarTeclaClick}>
          0
        </button>
        <button
          className="calculadora-tecla calculadora-tecla-ac"
          onClick={manejarTeclaClick}
        >
          AC
        </button>
        <button
          className="calculadora-tecla calculadora-tecla-flecha"
          onClick={manejarTeclaClick}
        >
          &larr;
        </button>
        <button
          id="tecla-igual"
          className="calculadora-tecla calculadora-tecla-enter"
          onClick={manejarTeclaClick}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculadora;
