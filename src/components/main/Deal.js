import React from 'react'

function Deal(props) {
    return (
        <li className='deal'>
            <p className=''>{props.id}</p>
            <p className=''>{props.time}</p>
            <p className=''>{props.carID}</p>
            <p className=''>{props.managerID}</p>
            <p className=''>{props.customerID}</p>
        </li>
    )
}

export default Deal
