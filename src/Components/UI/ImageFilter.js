import React from 'react';
import alimentacao from '../../assets/imagens/alimentacao.svg'
import outros from '../../assets/imagens/outros.svg'
import saude from '../../assets/imagens/saude.svg'
import transporte from '../../assets/imagens/transporte.svg'
import utilidades from  '../../assets/imagens/utilidades.svg'
import { Icone } from '../UI/index'

 const ImageFilter = (type) => {
    const Imagens = {
        default: <Icone src={outros} alt="Outros"/>,
        Restaurante: <Icone src={alimentacao} alt="Restaurante"/>,
        Saude: <Icone src={saude} alt="Saúde"/>,
        Utilidades: <Icone src={utilidades} alt="Utilidades"/>,
        Transportes: <Icone src={transporte} alt="Transporte"/>,
    };

    return Imagens[type] || Imagens.default;
};

export default ImageFilter;