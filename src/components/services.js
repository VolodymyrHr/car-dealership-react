import React, {useState, useEffect} from 'react'

function useFetch(endPoint, initialState){
    const [list, setList] = useState(initialState);

    useEffect(() =>{
        fetch('http://localhost:5000/api/' + endPoint)
            .then(res => res.json())
            .then(list => setList(list));
    }, [endPoint])

    return [list, setList];
}

export default useFetch;