import React, { useState, useEffect } from 'react';

import Car from './Car'

function getListItems(url){
    return fetch(url)
    .then(res => res.json())
}

function Cars() {
    const [cars, setCars] = useState([]);

    useEffect(() =>{
        function getCars(){
            getListItems('http://localhost:5000/api/cars')
            .then(cars => setCars(cars));
        }

        getCars();
    }, [])

    return (
        <div className="cars">
            <h2>Cars</h2>
            <ul>
                {cars.map(el => <Car key={el.id} {...el}/>)}
            </ul>
        </div>
    )
}

export default Cars
