import styled from "styled-components";
import dadosTabela from "../dadosTabela";

export default function Tabela({ faixa }) {
  return (
    <TabelaImc>
      <tr>
        <th>IMC</th>
        <th>Classificação</th>
        <th>Grau</th>
      </tr>
      {dadosTabela.map((item) => (
        <LinhaTr key={item.id} pintar={faixa === item.id}>
          <td>{item.imc}</td>
          <td>{item.classificacao}</td>
          <td>{item.grau}</td>
        </LinhaTr>
      ))}
    </TabelaImc>
  );
}

export const TabelaImc = styled.table`
  font-family: "Roboto", sans-serif;
  width: 90%;
  text-align: center;
  th {
    background-color: #28a684;
    color: white;
    font-weight: normal;
    padding: 10px;
  }
  td {
    padding: 6px;
  }
`;

export const LinhaTr = styled.tr`
  background-color: ${(props) => (props.pintar ? "#cdeae3" : "white")};
`;
