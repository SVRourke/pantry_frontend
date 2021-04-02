import React from 'react'
import ItemForm from '../components/ItemForm'
import { useHistory, useParams } from 'react-router-dom'

import { TestItems } from '../../common/TestData'


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
            <h1>new item</h1>
            <button onClick={() => history.goBack()}>cancel</button>
            <ItemForm cb={formHandler} />
        </div>
    )
}
