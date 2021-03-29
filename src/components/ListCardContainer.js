import React from 'react';

import styled from 'styled-components'

const Block = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #CACACA;
`; 

const ListCardContainer = ({records}) => {
    const cards = records.map(r => <p>{r.name}</p>)
    
    return (
        <Block>
            <h3>Lists List Component </h3>
            {cards}
        </Block>
    );
}

export default ListCardContainer;
