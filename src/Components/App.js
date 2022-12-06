import styled from "styled-components";
import { useState } from "react";
import Calculadora from "./Calculadora";
import Tabela from "./Tabela";

export default function App() {
  const [faixa, setFaixa] = useState(0);

  return (
    <Container>
      <Titulo>Calculadora de IMC</Titulo>
      <Calculadora setFaixa={setFaixa} />
      <Tabela faixa={faixa} />
    </Container>
  );
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.h1`
  text-align: center;
  color: #f53a00;
  font-family: "Roboto", sans-serif;
`;
