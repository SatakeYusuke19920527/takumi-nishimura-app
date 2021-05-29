import React, { useContext } from 'react'
import { Store } from '../store/index'
import { INCREMENT, DECREMENT, RESET, SANBAI, SANBAITAS } from '../actions/index'
import { Table } from 'react-bootstrap'
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
  console.log(globalState, 'check')
  return (
    <div>
      <h1>ComponentE.js</h1>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleClickone}>-1</button>
      <button onClick={handleClicktwo}>RESET</button>
      <button onClick={handleClickthree}>3*</button>
      <button onClick={handleClickfour}>3*+10</button>
      <h1>{globalState.count}</h1>
      
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>userID</th>
          <th>ID</th>
          <th>title</th>
          <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {
            globalState.data.map((d,index) => {
              return (
                <tr key={index}>
                <td>{d.userId}</td>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.completed}</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </Table>
    </div>
  )


}

export default ComponentE
