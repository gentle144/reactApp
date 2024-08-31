import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'


function Hook() {
  // let [no,setNo] = useState(0)
  // let [text,setText] = useState(false)
  const reducer =(state,actions)=>{
    switch (actions.type) {
      case "increase":
        return{no:state.no+1, text:state.text}
        case "toggle":
          return{no:state.no, text: !state.text}
    
      default:
        return state
    }
  }
  let [state,dispatch] = useReducer(reducer,{no:0,text:false})

  useEffect(()=>{
    console.log('this effect has worked');
  },[])
  let inputRef=useRef(null)
  let handle =()=>{
    console.log(inputRef.current.value)
    inputRef.current.value = 'your papa'
    useLayoutEffect(()=>{
      console.log();
    })

  }
  let increase =()=>{
    dispatch({type:"increase"})
    dispatch({type:"toggle"})
    // setNo(no+1)
    // setText(!text)
  }
  return (
    <div>

      <h1>{state.no}</h1>
      {state.text?<p>this is the text</p> :""}
      <button onClick={increase}>Done</button>
        <input type='text' ref={inputRef}/>
        <button onClick={handle}>increase</button>
        <h1>dogs just paid</h1>
    </div>
  
  )
}

export default Hook