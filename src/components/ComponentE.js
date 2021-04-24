import React, { useContext } from 'react'
import { Store } from '../store/index'
const ComponentE = () => {
  const value = useContext(Store)
  return (
    <div>
      <h1>ComponentE.js</h1>
      <h2>{value}</h2>
   </div>
 )  
}

export default ComponentE
