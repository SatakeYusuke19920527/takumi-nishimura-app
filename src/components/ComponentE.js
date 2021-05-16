import React, { useContext } from 'react'
import { Store } from '../store/index'
import { INCREMENT, DECREMENT,RESET,SANBAI,SANBAITAS } from '../actions/index'
const ComponentE = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const handleClick = () => {
    setGlobalState({
      type: INCREMENT
    })
  }
  const handleClickone = () => {
    setGlobalState({
      type: DECREMENT
    })
  }
  const handleClicktwo = () => {
    setGlobalState({
      type: RESET
    })
  }
  const handleClickthree = () => {
    setGlobalState({
      type: SANBAI
    })
  }
  const handleClickfour = () => {
    
    setGlobalState({
      type: SANBAITAS
    })
    
    
  }
  console.log(globalState)
  return (
    <div>
      <h1>ComponentE.js</h1>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleClickone}>-1</button>
      <button onClick={handleClicktwo}>RESET</button>
      <button onClick={handleClickthree}>3*</button>
      <button onClick={handleClickfour}>3*+10</button>
      <h1>{globalState.count}</h1>
      
    </div>
  )


}

export default ComponentE
