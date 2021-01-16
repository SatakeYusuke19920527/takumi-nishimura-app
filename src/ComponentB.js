import React from 'react'
import {useHistory,Link} from 'react-router-dom'


const ComponentB = () => {
    const history = useHistory()
    const backPage = () =>{
        history.push("/")
    }
    return (
        <div>
        <div>ComponentB</div>
        <button onClick={backPage}>ホームへ戻る</button>
        <Link to="componentc" >ComponentCへ移動</Link>
        </div>
    )
}

export default ComponentB