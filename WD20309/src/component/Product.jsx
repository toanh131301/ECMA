import React from 'react'

function Product(props) {
  // console.log(props);
  
  return (
    <div>

      <div className="card" style={{width: '18rem'}}>
        <img src={props.image} height={400} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Giá bán: {props.price}</p>
          <p className="card-text">Danh mục: {props.category}</p>
          <a href="#" className="btn btn-primary">Mua ngay</a>
        </div>
      </div>


    </div>
  )
}

export default Product