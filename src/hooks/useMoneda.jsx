import React, { Fragment, useState } from "react";

const useMoneda = (label, stateInicial, opciones) => {
  // state de custom hook
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <label htmlFor="">{label}</label>
      <select
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
      </select>
    </Fragment>
  );
  //retornando valores del hook
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
