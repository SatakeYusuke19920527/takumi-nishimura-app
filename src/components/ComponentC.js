import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import reducer from '../reducers/index'

const initialCount = {
    count: 0
}

const ComponentC = () => {
    const [ state, dispatch ] = useReducer(reducer,initialCount);

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
    </div>
)

}
export default ComponentC
