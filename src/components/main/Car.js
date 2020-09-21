import React from 'react'

function Car(props) {
    return (
        <li className='car'>
            <p className='number'>{props.id}</p>
            <i className="fa fa-car"></i>
            <p className='brand'>{props.brand}</p>
            <p className='model'>{props.model}</p>
            <p className='cost'>
                {props.cost}
                <span>&#8372;</span>
            </p>
        </li>
    )
}

export default Car
