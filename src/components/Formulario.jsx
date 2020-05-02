import React from "react";
import { Button } from "../StyledComponents/Button";
import useMoneda from "../hooks/useMoneda";

const Formulario = () => {
  //usemoneda
  const [moneda, SelectMonedas, actualizarState] = useMoneda();

  return (
    <form action="">
      <SelectMonedas />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
