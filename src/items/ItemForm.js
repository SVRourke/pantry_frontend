import { createEvent } from '@testing-library/dom'
import React, { useState } from 'react'
import { CardBody } from '../common/elements'

export default function ItemForm(props) {
    
    const [info, setInfo] = useState(props.record || {
        name: "",
        amount: ""
    })
    console.log(info)

    const changeHandler = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })

    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.cb(info)
        // REDIRECT        
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label for="name">Title</label>
                <input onChange={changeHandler} type="text" name="name" value={info.name} />
                <label for="amount" >amount</label>
                <textarea onChange={changeHandler} name="amount" value={info.amount} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
