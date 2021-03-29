import React from 'react';

import styled from 'styled-components'

const Block = styled.div`
    width: 100%;
    height: 20vh;
    background-color: #CACACA;
`; 

const ListInvitesContainer = ({ invites }) => {
    const cards = invites.map(r => <p>{r.type}</p>)

    return (
        <Block>
            <h3>Invites Component</h3>
            {cards}
        </Block>
    );
}

export default ListInvitesContainer;
