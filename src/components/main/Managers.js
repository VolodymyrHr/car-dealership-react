import React, {useState, useEffect} from 'react'

import Manager from './Manager'

function useFetch(url, initialState){
    const [list, setList] = useState(initialState);

    useEffect(() =>{
        fetch(url)
            .then(res => res.json())
            .then(list => setList(list));
    }, [url])

    return list;
}

function Managers() {
    const managers = useFetch('http://localhost:5000/api/managers', []);

    return (
        <div className="managers">
            <h2>Managers</h2>
            <ul>
                {managers.map(el => <Manager key={el.id} {...el}/>)}
            </ul>
        </div>
    )
}

export default Managers
