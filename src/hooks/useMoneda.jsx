import React, { Fragment, useState } from "react";

const useMoneda = () => {
  // state de custom hook
  const [state, actualizarState] = useState("");

  const Seleccionar = () => (
    <Fragment>
      <label htmlFor="">Moneda</label>
      <select name="" id="">
        <option value=";XN">Peso Mexicano</option>
      </select>
    </Fragment>
  );
  //retornando valores del hook
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
