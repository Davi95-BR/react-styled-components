import React from 'react';
import styled from 'styled-components'
import Item from '../Item'
import ImageFilter from '../UI/ImageFilter'

const Items = styled.div`
    align-items: center;
    box-shadow: 4px 4px 20px 0px rgba(110, 0, 580, 0.1);
    border-radius: 10px;
    display: flex;
    font-size: 12px;
    justify-content: space-around; 
    margin: 2px;
    padding: 10px;
`

export default (props) => {
    return(
        <Items>
            {ImageFilter(props.type)}
            <Item {...props} />
            <span>{props.date}</span>
        </Items>
    )

}