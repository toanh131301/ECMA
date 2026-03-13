import React, { useEffect, useState } from 'react'

function Title() {
  const [title, setTitle] = useState('')

  // callback luôn chạy lần đầu
  // callback gọi lại mỗi khi componet re render
  useEffect(()=>{
    // console.log(title);
    document.title = title; // thay đổi DOM
  })

  return (
    <div>
      <input type="text" value={title} onChange={
        (e) => {
          setTitle(e.target.value)
        }
      } />
    </div>
  )
}

export default Title