import React from 'react'

function Select(props) {
    return (
        <select defaultValue={props.listName} onChange={props.onChange}>
            {props.list.map(item => <option key={item.id} value={item.id}>{item.id} - {item.name}</option>)}
        </select>
    )
}

export default Select
