import React from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import ItemForm from '../components/ItemForm'
import styled from 'styled-components'

// REPLACE WITH CALL TO STORE
import { TestItems } from '../../common/TestData'

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

export default function EditItem() {
    const history = useHistory()
    const {url} = useRouteMatch()

    const formHandler = (info) => {
        alert(`Form Submitted ${info.name}: ${info.amount}|`)
        history.push(url.split('/').slice(0, url.split("/").length - 2).join('/'))
    }

    // REPLACE WITH CALL TO STORE
    const userId = parseInt(useParams().id)
    const record = TestItems.find(i => i.id === userId)

    return (
        <div>
            <Wrapper>
                <h1>EDIT: {record.name}</h1>
                <CancelButton onClick={() => history.goBack()}>cancel?</CancelButton>
            </Wrapper>
            <ItemForm cb={formHandler} record={record} />
        </div>
    )
}
