import React, { useState, useEffect } from "react";

import { Contenedor } from "./StyledComponents/Contenedor";
import { Imagen } from "./StyledComponents/Imagen";
import { Heading } from "./StyledComponents/Heading";

import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";
import axios from "axios";
function App() {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptoMoneda] = useState("");
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (moneda === "") return;
      //consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      //mostrar el spinner
      guardarCargando(true);

      //ocultar y mostrar el resultado
      setTimeout(() => {
        guardarCargando(false);

        //guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    };
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  const imagen =
    "https://www.ecestaticos.com/imagestatic/clipping/fa1/b77/fa1b77b9eefa0af4ea63602067029ecc/el-coronavirus-arrasa-el-paraiso-suizo-de-las-criptomonedas-este-es-su-plan-de-rescate.jpg?mtime=1588027452";

  //mostrar spinner o resultado
  const componente = cargando ? (
    <Spinner />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen Cripto" />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptoMoneda={guardarCriptoMoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
