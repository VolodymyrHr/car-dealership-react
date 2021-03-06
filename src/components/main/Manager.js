import React from 'react'

function Manager(props) {
    return (
        <li className='manager'>
            <p className='number'>{props.id}</p>
            <i className="fa fa-user"></i>
            <p className='name'>{props.name}</p>
        </li>
    )
}

export default Manager
