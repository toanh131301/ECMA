import React, { useEffect, useState } from 'react'

function CallAPI() {

  const [list, setList] = useState([])

  // UseEffect với []
  // chỉ gọi callback lần đầu tiên

  useEffect(()=>{
    fetch(`http://localhost:3000/products`)
      .then((res)=>{
        // console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data);
        setList(data)
      })
      .catch(err=>{
        console.log(err);
      })
  },[])

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
    </div>
  )
}

export default CallAPI