import styled from "styled-components";
import { useState } from "react";

export default function Calculadora({ setFaixa }) {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(0);

  function limpar() {
    setAltura("");
    setPeso("");
    setImc(0);
    setFaixa(0);
  }

  function calcular() {
    const alturaNumero = Number(altura.replace(",", "."));
    const pesoNumero = Number(peso.replace(",", "."));
    const calculoImc = pesoNumero / (alturaNumero * alturaNumero);
    if (calculoImc > 0 && !isNaN(calculoImc)) {
      setImc(calculoImc.toFixed(2));
    } else {
      alert("Digite dados válidos!");
    }
    selecionarFaixa(calculoImc);
  }

  function selecionarFaixa(calculoImc) {
    if (calculoImc <= 18.5) {
      setFaixa(1);
    } else if (calculoImc > 18.5 && calculoImc <= 24.9) {
      setFaixa(2);
    } else if (calculoImc > 24.9 && calculoImc <= 29.9) {
      setFaixa(3);
    } else if (calculoImc > 29.9 && calculoImc <= 39.9) {
      setFaixa(4);
    } else if (calculoImc > 39.9) {
      setFaixa(5);
    }
  }

  return (
    <>
      <Row>
        <InputContainer>
          <p>Altura</p>
          <input value={altura} onChange={(e) => setAltura(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <p>Peso</p>
          <input value={peso} onChange={(e) => setPeso(e.target.value)} />
        </InputContainer>
      </Row>

      <Row>
        <BotaoCalculadora onClick={limpar}>Limpar</BotaoCalculadora>
        <BotaoCalculadora onClick={calcular}>Calcular</BotaoCalculadora>
      </Row>
      <ContainerIMC>Seu IMC é: {imc}</ContainerIMC>
    </>
  );
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  p {
    margin: 0;
    margin-bottom: 2px;
    text-transform: capitalize;
    color: #28a684;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }
  input {
    padding: 5px 10px;
    border: 1px solid lightgrey;
    border-radius: 6px;
    width: 160px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const BotaoCalculadora = styled.button`
  background-color: white;
  font-family: "Roboto", sans-serif;
  border: 2px solid #28a684;
  border-radius: 6px;
  color: #28a684;
  font-weight: bold;
  width: 182px;
  padding: 5px 10px;
  margin: 5px;
  &:hover {
    cursor: pointer;
    background-color: #cdeae3;
  }
`;

export const ContainerIMC = styled.div`
  padding: 15px 25px;
  background-color: #f53a00;
  color: white;
  font-family: "Roboto", sans-serif;
  margin: 15px;
  border-radius: 6px;
`;
