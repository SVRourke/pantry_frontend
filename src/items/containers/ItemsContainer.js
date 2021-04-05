import React from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import ItemCard from "../components/ItemCard"
import styled from 'styled-components'

const AddLink = styled(Link)`
    border: solid black 2px;
    padding: .5rem 2rem;
    border-radius: 2rem;
    font-weight: 600;
    ${'' /* position: absolute;
    bottom: 5rem;
    right: 5rem; */}
`;

export default function ItemContainer({records}) {
    const { path, url } = useRouteMatch()
    const cards = records.map(r => <ItemCard record={r} />)
    return (
        <div style={{height: '100vh', overflow: "hidden"}}>
            <div style={{height: "80vh", overflowY: 'scroll'}}>
                {cards}
            </div>
            <AddLink to={`${url}/new`} >new</AddLink>
        </div>
    )
}
