import React from "react";
import styled from "styled-components";
const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  p {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del dia: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del dia: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variación en las últimas 24 horas:
        <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};
export default Cotizacion;
