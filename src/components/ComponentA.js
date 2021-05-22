import React, { useState, useEffect, useContext,} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Store } from '../store/index'
import { AGLOBAL } from '../actions/index'

const ComponentA = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const [ count, setCount ] = useState(0);
    const [data, setData] = useState([])  

    useEffect(() => {
        console.log('useEffect が呼び出されました。');

        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            console.log(res, 'res check')
            setData(res.data)
            setGlobalState({
                type: AGLOBAL,
                data:res.data
            })

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

    const start = () => {
        return (
            <div>
            <Table striped bordered hover  >
            <thead>
              <tr>
                <th>userID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
                {data.map(u => {
                          return(
                                  <tr>
                                    <td>{u.userId}</td>
                                    <td>{u.id}</td>
                                    <td>{u.title}</td>
                                    <td>{u.body}</td>
                                  </tr> 
                          )
                })}
            </tbody>
          </Table>
          </div>



        )
    
  
    }
    return (
        <div>
            <h1>componentA</h1>
            <Link to="componentb">Go to componentB</Link>
            
            <div><button onClick={up}>up</button></div>
            <div><button onClick={down}>down</button></div>
            <div><button onClick={reset}>reset</button></div>
            <div><button onClick={start}>go</button></div>
            
            
        </div>
    )
}



export default ComponentA
