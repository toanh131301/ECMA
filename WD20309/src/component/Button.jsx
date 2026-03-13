import React, { useState } from 'react'

function Button() {
  const [count, setCount] = useState(1)

  const handleIncrease = () => {
    // prev: giá trị trước đó của count
    setCount((prev)=>{
      return prev+1; // return: giá trị thay thế
    })
    setCount((prev)=>{
      return prev+1; // return: giá trị thay thế
    })
    setCount((prev)=>{
      return prev+1; // return: giá trị thay thế
    })
    
  }
  
  const handleDecrease = () => {
    setCount(count-1)
  }
  
  const handleReset = () =>{
    setCount(0)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease} className="btn btn-primary">
        Tăng
      </button>
      <button onClick={handleDecrease} className="btn btn-danger">
        Giảm
      </button>
      <button onClick={handleReset} className="btn btn-warning">
        Reset
      </button>
    </div>
  )
}

export default Button