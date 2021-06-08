import React from 'react';
import alimentacao from '../../assets/imagens/alimentacao.svg'
import outros from '../../assets/imagens/outros.svg'
import saude from '../../assets/imagens/saude.svg'
import transporte from '../../assets/imagens/transporte.svg'
import utilidades from  '../../assets/imagens/utilidades.svg'
import { IconeTema } from '../UI/index'

 const ImageFilter = (type) => {
    const Imagens = {
        default: <IconeTema src={outros} alt="Outros"/>,
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante"/>,
        Saude: <IconeTema src={saude} alt="Saúde"/>,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades"/>,
        Transportes: <IconeTema src={transporte} alt="Transporte"/>,
    };

    return Imagens[type] || Imagens.default;
};

export default ImageFilter;