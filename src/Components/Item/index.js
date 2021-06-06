import React from 'react';
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    flex-direction: column;

    .text{
        font-weight: bold;
    }

    .destaqueValor{
        color: blue;
    }
`

export default ({type, from, value} ) => {
    return(
        <Item>
            <span className="text">{type}</span>
            <span>{from}</span>
            <span className="destaqueValor">{value}</span>
        </Item>
    )
}