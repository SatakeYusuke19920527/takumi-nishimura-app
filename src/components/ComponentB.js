import React from 'react'
import { Link } from 'react-router-dom'

const ComponentA = () => {
    return (
        <div>
            <h1>componentB</h1>
            <Link to="">Go to componentA</Link>
            <Link to="componentc">Go to componentC</Link>           
        </div>
    )
}

export default ComponentA
