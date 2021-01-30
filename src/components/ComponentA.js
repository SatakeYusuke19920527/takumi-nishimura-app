import React, { useState, useEffect, Button } from 'react'
import { Link } from 'react-router-dom'

const ComponentA = () => {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log('useEffect が呼び出されました。');
    }, []);
    return (
        <div>
            <h1>componentA</h1>
            <Link to="componentb">Go to componentB</Link>
            
            <div>count : {count}</div>
        </div>
    )
}

export default ComponentA
