import React, {useState, useEffect} from 'react'

import useFetch from './../services'
import Select from './../Select'
import Deal from './Deal'

function Deals() {
    const previousDeals = useFetch('deals', []);

    const cars = useFetch('cars', []);
    const managers = useFetch('managers', []);
    const customers = useFetch('customers', []);

    const [carId, setCarId] = useState(0);
    const [managerId, setManagerId] = useState(0);
    const [customerId, setCustomerId] = useState(0);

    const [deals, setDeal] = useState([]);

    useEffect(() => {
        setDeal([...previousDeals]);
    }, [previousDeals])

    function addDeal(event){
        event.preventDefault();
        const newDeal = {CarID: parseInt(carId), ManagerID: parseInt(managerId), CustomerID: parseInt(customerId)};

        fetch('http://localhost:5000/api/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDeal)
        }).then(response => response.json())
        .then(deal => setDeal([...previousDeals, deal]))
    }

    return (
        <div className='deals'>
            <h2>Add new deal</h2>
            <form onSubmit={addDeal}>
                <Select 
                    listName='Select car'
                    list={cars.map(item => ({id: item.id, name: item.brand + ' - ' + item.model}))}
                    onChange={e=>setCarId(e.target.value)}/>
                <Select
                    listName='Select manager'
                    list={managers}
                    onChange={e=>setManagerId(e.target.value)}/>
                <Select
                    listName='Select customer'
                    list={customers}
                    onChange={e=>setCustomerId(e.target.value)}/>
                <button>Add</button>
            </form>
            <span className='separatin__line'></span>
            <h2>Previous deals</h2>
            <ul>
                {deals.map(item => <Deal key={item.id} {...item}/>)}
            </ul>
        </div>
    )
}

export default Deals
