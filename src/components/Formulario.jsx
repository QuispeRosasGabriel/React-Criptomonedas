import React, { useEffect, useState } from "react";
import { Button } from "../StyledComponents/Button";
import useMoneda from "../hooks/useMoneda";
import useCriptoMoneda from "../hooks/useCriptoMoneda";
import axios from "axios";
import Error from "./Error";
const Formulario = () => {
  //state de listado
  const [listaCripto, guardarCriptomonedas] = useState([]);
  const [error, guardarError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro de España" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "PEN", nombre: "Sol Peruano" },
  ];

  //usemoneda
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);

  //usecriptomoneda
  const [criptomoneda, SelectCripto] = useCriptoMoneda(
    "Elige tu cripcomoneda",
    "",
    listaCripto
  );

  //Ejecutar llamado al api
  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);

      guardarCriptomonedas(resultado.data.Data);
    };
    consultarApi();
  }, []);

  //cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();
    //validar campos
    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      return;
    }
    //pasar los datos al componente principal
    guardarError(false);
  };

  return (
    <form action="" onSubmit={cotizarMoneda}>
      {error && <Error mensaje="Todos los campos son obligatorios" />}
      <SelectMonedas />
      <SelectCripto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
