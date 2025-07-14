import React,{useState} from 'react'

function Card(){
    const [count,setCount]=useState(1)
    const [isFlipped,setFlipped]=useState(false)
    return(
        <>
        <div className="flashcard" onClick={()=>setFlipped(!isFlipped)}>
           {isFlipped ? <p>This is the answer</p> : <h3>Question {count}</h3>}
        </div>
        <button onClick={()=>setCount(count + 1)}>Next Question {'>'}</button>
        </>
    )
}
export default Card