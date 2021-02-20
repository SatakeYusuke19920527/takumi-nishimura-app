import React, { useState, useEffect, Button,} from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentC = () => {
    const [ count, setCount ] = useState(0);
    const [data, setData] = useState([])  

    useEffect(() => {
        console.log('useEffect が呼び出されました。');
        axios.get("https://jsonplaceholder.typicode.com/posts")
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

    const start = () => {
        {data.map(u => {
            return(

                    <tr key={"a"}>
                      <td>{u.userId}</td>
                      <td>{u.id}</td>
                      <td>{u.title}</td>
                      <td>{u.body}</td>
                    </tr> 
                    
        )

        })}
    
    }
    return (
        <div>
            <h1>componentC</h1>
            <Link to="componentb">Go to componentB</Link>
            
            <div><button onClick={up}>up</button></div>
            <div><button onClick={down}>down</button></div>
            <div><button onClick={reset}>reset</button></div>
            <div><button onClick={start}>go</button></div>
            
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

            </tbody>
          </Table>
          </div>
        </div>
    )
}

export default ComponentC
