import React from "react";
import "./MainPage.css";
import Calculadora from "../../components/Calculator/Calculadora";

export default function MainPage() {
    return (
        <>
        <h1 className="calculadora-titulo">Calculadora </h1>
        <Calculadora />       
        </>
    )
}