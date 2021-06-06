import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria} from "../UI/variaveis";
import {Botao} from '../UI/index'

const StyledCabecalho = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 16vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const CabecalhoBotao = styled.div`
  display: flex;
  flex-direction: inline;
`;


const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <CabecalhoBotao>
        <Botao href="https://google.com">
          Ajuda
        </Botao>
        <Botao primary href="https://google.com">
          Sair
        </Botao>
      </CabecalhoBotao>
    </StyledCabecalho>
  );
};

export default Cabecalho;
