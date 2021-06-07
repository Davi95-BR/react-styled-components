import React from 'react';
import alimentacao from '../../assets/images/alimentacao.svg'
import outros from '../../assets/images/outros.svg'
import saude from '../../assets/images/saude.svg'
import transporte from '../../assets/images/transporte.svg'
import utilidades from  '../../assets/images/utilidades.svg'
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