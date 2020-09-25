import React, {useState} from 'react'

import Manager from './Manager'
import {useFetchNoSetFunc} from './../services'

function Managers() {
    const managers = useFetchNoSetFunc('managers', []);

    const [beginning, setBeginning] = useState('');
    const [theEnd, setTheEnd] = useState('');
    const [bestManager, setBestManager] = useState({});

    function findBest(event){
        event.preventDefault();
        console.log(beginning, theEnd)
        fetch(`http://localhost:5000/api/managers/best/?Beginning=${beginning}&TheEnd=${theEnd}`)
            .then(res => res.json())
            .then(bestManager => setBestManager(bestManager))
    }

    return (
        <div className="managers">
            <div className="allManager">
                <h2>Managers</h2>
                <ul>
                    {managers.map(el => <Manager key={el.id} {...el}/>)}
                </ul>
            </div>
            <div className='bestManager_inPeriodOfTime'>
                <h2>Best manager in period of time</h2>
                <form onSubmit={findBest}>
                    <input type='date' name='Beginning' onChange={e => setBeginning(e.target.value)}></input>
                    <input type='date' name='TheEnd' onChange={e => setTheEnd(e.target.value)}></input>
                    <button>Find</button>
                </form>
                {Object.keys(bestManager).length > 0? 
                    <p>From {bestManager.beginning} to {bestManager.theEnd} best manager is:
                    <em>Manager - {bestManager.managerId}</em>. 
                    He/She has sold <em>{bestManager.salesQuantity}</em> cars</p>:
                    <p>Please, choose period of time</p>
                }
            </div>
        </div>
    )
}

export default Managers
