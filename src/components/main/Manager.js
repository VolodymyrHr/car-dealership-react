import React from 'react'

function Manager(props) {
    return (
        <li className='manager'>
            <p className=''>{props.id}</p>
            <i></i>
            <p className=''>{props.name}</p>
        </li>
    )
}

export default Manager
