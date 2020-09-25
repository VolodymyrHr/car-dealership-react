import React from 'react'

function Customer(props) {
    return (
        <li className='customer'>
            <p className='number'>{props.id}</p>
            <i className="fa fa-user-secret"></i>
            <p className='name'>{props.name}</p>
        </li>
    )
}

export default Customer
