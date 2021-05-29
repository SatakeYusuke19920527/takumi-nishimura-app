import React, { useReducer, useEffect, useContext,useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import reducer from '../reducers/index'
import ComponentD from './ComponentD'
import { Store } from '../store/index'
import { AGLOBAL } from '../actions/index'


const initialCount = {
    count: 0
}

const ComponentC = () => {
    const [state, dispatch] = useReducer(reducer, initialCount);
    const { globalState, setGlobalState } = useContext(Store);
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

    const increment = () => {
        console.log('increment');
        dispatch({type: 'INCREMENT'
    })
}

    const decrement = () => {
        console.log('decrement');
        dispatch({type: 'DECREMENT'
    })
    }

    const reset = () => {
        console.log('reset');
        dispatch({type: 'RESET'
    })
    }

    const sanbai = () => {
        console.log('3*');
        dispatch({type: 'SANBAI'
    })
    }

    const sanbaitas = () => {
        console.log('3* + 100');
        dispatch({type: 'SANBAITAS'
        })
    }


return (
    <div>
        <div>ComponentC</div>
        <Link to="/">ComponentAへ移動</Link>

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={sanbai}>3*</button>
        <button onClick={sanbaitas}>3* + 100</button>
        <h1>{state.count}</h1>
        <ComponentD />
    </div>
)

}
export default ComponentC

