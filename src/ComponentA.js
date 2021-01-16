import React from 'react'
import { Link } from 'react-router-dom';

const ComponentA = () => {
    return (
        <>
        <div>ComponentA</div>
        <Link to="componentb" >ComponentBへ移動</Link>
        </>
    )
}

export default ComponentA;