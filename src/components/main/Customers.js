import React from 'react'

import Customer from './Customer'
import {useFetchNoSetFunc} from './../services'

function Customers() {
    const customers = useFetchNoSetFunc('customers', []);

    return (
        <div className="customers">
            <h2>Customers</h2>
            <ul>
                {customers.map(el => <Customer key={el.id} {...el}/>)}
            </ul>
        </div>
    )
}

export default Customers
