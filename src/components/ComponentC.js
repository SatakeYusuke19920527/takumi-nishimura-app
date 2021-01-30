import React from 'react'
import { Link } from 'react-router-dom'

const ComponentA = () => {
    
    return (
        <div>
            <h1>componentC</h1>
            <Link to="componentb">Go to componentB</Link>
        </div>
    )
}

export default ComponentA
