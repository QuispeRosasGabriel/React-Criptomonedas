import React from "react";

import { Contenedor } from "./StyledComponents/Contenedor";
import { Imagen } from "./StyledComponents/Imagen";
import { Heading } from "./StyledComponents/Heading";
function App() {
  const imagen =
    "https://www.ecestaticos.com/imagestatic/clipping/fa1/b77/fa1b77b9eefa0af4ea63602067029ecc/el-coronavirus-arrasa-el-paraiso-suizo-de-las-criptomonedas-este-es-su-plan-de-rescate.jpg?mtime=1588027452";
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen Cripto" />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
      </div>
    </Contenedor>
  );
}

export default App;
