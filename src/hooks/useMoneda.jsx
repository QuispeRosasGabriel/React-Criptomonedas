import React, { Fragment, useState } from "react";
import { Label } from "../StyledComponents/Label";
import { Select } from "../StyledComponents/Select";

const useMoneda = (label, stateInicial, opciones) => {
  // state de custom hook
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label htmlFor="">{label}</Label>
      <Select
        name=""
        id=""
        value={state}
        onChange={(e) => actualizarState(e.target.value)}
      >
        <option value="">--Seleccione--</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  //retornando valores del hook
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
