import React from "react";
import { Box, Botao } from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({id, type, value, date, from}) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date}/>
        );
      })
      }
      <Botao primary>Ver mais</Botao>
    </Box>
  );
};

export default Extrato;
