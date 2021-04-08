import React from 'react'
import ItemForm from '../components/ItemForm'
import { useHistory, useParams } from 'react-router-dom'

import { TestItems } from '../../common/TestData'

import styled from 'styled-components'
const Wrapper = styled.div`
    display: flex;
    margin: 1rem 0 2rem 0;
    
`;

const CancelButton = styled.button`
    background: none;
    border: none;
    padding-left: 1rem;
    font-size: 1.2rem;

    &:hover {
        color: var(--red-color)
    }
`;

export default function NewItem() {
    const history = useHistory()

    const formHandler = (info) => {
        alert(`Form Submitted ${info.name}: ${info.amount}`)
    }

    // REPLACE WITH CALL TO STORE
    const userId = parseInt(useParams().id)
    const record = TestItems.find(i => i.id === userId)



    return (
        <div>
            <Wrapper>
                <h1>new item</h1>
                <CancelButton onClick={() => history.goBack()}>cancel?</CancelButton>
            </Wrapper>
            <ItemForm cb={formHandler} />
        </div>
    )
}
