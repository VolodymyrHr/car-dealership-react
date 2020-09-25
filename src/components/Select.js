import React from 'react'

function Select(props) {
    return (
        <select defaultValue={'DEFAULT'}  onChange={props.onChange}>
            <option value="DEFAULT" disabled>{props.listName}...</option>
            {props.list.map(item => <option key={item.id} value={item.id}>{item.id} - {item.name}</option>)}
        </select>
    )
}

export default Select
