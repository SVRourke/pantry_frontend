import React from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import ItemCard from "../components/ItemCard"

export default function ItemContainer({records}) {
    const { path, url } = useRouteMatch()
    const cards = records.map(r => <ItemCard record={r} />)
    return (
        <div>
            {cards}
            <Link to={`${url}/new`} >new</Link>
        </div>
    )
}
