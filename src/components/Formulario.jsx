import React from "react";
import { Button } from "../StyledComponents/Button";
import useMoneda from "../hooks/useMoneda";

const Formulario = () => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro de España" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "PEN", nombre: "Sol Peruano" },
  ];

  //usemoneda
  const [moneda, SelectMonedas, actualizarState] = useMoneda(
    "Elige tu moneda",
    "",
    MONEDAS
  );

  return (
    <form action="">
      <SelectMonedas />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
