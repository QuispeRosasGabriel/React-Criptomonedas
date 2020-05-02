import React, { Fragment, useState } from "react";
import { Label } from "../StyledComponents/Label";
import { Select } from "../StyledComponents/Select";

const useCriptoMoneda = (label, stateInicial, opciones) => {
  //state de custom hook
  const [state, actualizarState] = useState(stateInicial);
  const SelectCripto = () => {
    return (
      <Fragment>
        <Label>{label}</Label>
        <Select value={state} onChange={(e) => actualizarState(e.target.value)}>
          <option value="">--Seleccionar</option>
        </Select>
      </Fragment>
    );
  };

  return [state, SelectCripto, actualizarState];
};

export default useCriptoMoneda;
