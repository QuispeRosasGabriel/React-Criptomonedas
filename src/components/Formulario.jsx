import React, { useEffect, useState } from "react";
import { Button } from "../StyledComponents/Button";
import useMoneda from "../hooks/useMoneda";
import useCriptoMoneda from "../hooks/useCriptoMoneda";
import axios from "axios";

const Formulario = () => {
  //state de listado
  const [listaCripto, guardarCriptomonedas] = useState([]);

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

  return (
    <form action="">
      <SelectMonedas />
      <SelectCripto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
