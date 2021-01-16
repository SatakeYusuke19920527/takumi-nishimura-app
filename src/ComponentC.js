import React from 'react'
import { Link } from 'react-router-dom';

const ComponentC = () => {
    return (
        <>
        <div>ComponentC</div>
        <Link to="componentb" >ComponentBへ移動</Link>
        </>
    )
}

export default ComponentC