import React from 'react'
import { 
    CardHeading,
    MemberCount,
    Row
 } from "../../common/elements"
 import { Route, Link, useRouteMatch } from "react-router-dom"

export default function ItemCard({ record }) {
    const acquire = () => {
        alert(`marking ${record.name} acquired ID: ${record.id}`)
    }
    const trash = () => {
        alert(`trashing ${record.name} ID: ${record.id}`)
    }

    const { path, url } = useRouteMatch()
    
    return (
        <div>
            <Route exact path={path} >
                <CardHeading>
                    {record.name}
                </CardHeading>
                
                <MemberCount>
                    {record.amount}
                </MemberCount>

                <Row>
                    <button onClick={acquire}>acquired</button>
                    <Link to={`${url}/${record.id}/edit`}>edit</Link>
                    <button onClick={trash}>trash</button>
                </Row>            
            </Route>

        </div>
    )
}
