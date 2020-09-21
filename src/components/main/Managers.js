import React, {useState, useEffect} from 'react'

import Manager from './Manager'

function getListItems(url){
    return fetch(url)
    .then(res => res.json())
}

function Managers() {
    const [managers, setManagers] = useState([]);

    useEffect(() =>{
        function getManagers(){
            getListItems('http://localhost:5000/api/managers')
            .then(managers => setManagers(managers));
        }

        getManagers();

        return () => {
            getManagers();
        }
    }, [])

    return (
        <div className="managers">
            
            <ul>
                {managers.map(el => <Manager key={el.id} id={el.id} name={el.name}/>)}
            </ul>
        </div>
    )
}

export default Managers
