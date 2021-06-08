import styled from "styled-components";
import { corPrimaria, fundoClaro, verdeEscuro } from "./variaveis";

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;


// Herdando  a const Icone
export const IconeTema = styled(Icone)` 
  filter: ${({ theme }) => theme.filter}

`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Botao = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background: ${(props) => (props.primary ? corPrimaria : fundoClaro)};
  color: ${(props) => (props.primary ? fundoClaro : corPrimaria)};
  border: none;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 10px;
  cursor: pointer;

  &:hover {
    color: ${verdeEscuro};
  }
`;

export const Detalhe = styled.span`
  color: ${corPrimaria};
  font-size: 24px;
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;

  &:hover {
    color: ${verdeEscuro};
  }
`;

export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: ${corPrimaria};
  border: none;
  cursor: pointer;
 

  &:hover {
    color: ${verdeEscuro};
  }
`;
