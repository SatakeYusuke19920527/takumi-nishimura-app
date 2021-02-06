import React, { useState, useEffect, Button,} from 'react'
import { Link } from 'react-router-dom'
import {Table} from 'react-bootstrap'
import axios from 'axios'

const ComponentA = () => {
    const [ count, setCount ] = useState(0);
    const [data, setData] = useState([])  

    useEffect(() => {
        console.log('useEffect が呼び出されました。');

        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            console.log(res, 'res check')
            setData(res.data)
        })
    }, []);

    const up = () => {
        setCount(count + 1);
    }

    const down = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>componentA</h1>
            <Link to="componentb">Go to componentB</Link>
            
            <div><button onClick={up}>up</button></div>
            <div><button onClick={down}>down</button></div>
            <div><button onClick={reset}>reset</button></div>
            <div>数値 : {data.map(d => {
                return(
                    <div>
                        {d.title}
                    </div>
                )
            })}</div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
        

    )
}

export default ComponentA
