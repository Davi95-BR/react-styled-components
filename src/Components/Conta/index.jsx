import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/imagens/privado.svg";
import olho_icone from "../../assets/imagens/olho.svg";
import dinheiro from "../../assets/imagens/dinheiro.svg";
import {Icone, Box, Botao, Detalhe, Saldo} from '../UI/index.js'


const IconeMargin = styled(Icone)`
  marginTop: "2px"
`;  //Herança de um estilo, que no caso é da const Icone e adicionando um plus

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <Detalhe>
          <Icone src={dinheiro} alt="Ícone Saldo" />
        </Detalhe>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao primary onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
