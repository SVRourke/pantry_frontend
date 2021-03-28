import React from 'react'
import { Route, Switch, Link, useRouteMatch } from "react-router-dom"

const Test = () => {
  return "List"
}

const Lists = () => {
  const records = [
    { id: 3, name: 'First' },
    { id: 4, name: 'Second' },
    { id: 5, name: 'Third' },
    { id: 6, name: 'Fourth' },
    { id: 7, name: 'Fifth' },
    { id: 8, name: 'Sixth' }
  ]

  let { path, url } = useRouteMatch();

  const links = records.map(r => <Link to={`${url}/${r.id}`} >{r.name}</Link>)
  return (
        <div>
            <h1>Lists</h1>
            {links}
            <Switch>
              <Route path={`${url}/:id`} component={Test} />
            </Switch>
        </div>
  )
}

export default Lists
