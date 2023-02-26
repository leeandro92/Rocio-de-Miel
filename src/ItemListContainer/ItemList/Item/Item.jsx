import React from 'react'
import { Link } from 'react-router-dom'

const Item = (items) => {
  const prod=items.item
  return (
    <div key={prod.id} className="items">   
      <Link to={`/detail/${prod.id}`} style={{textDecoration:"none",color:"black"}}>
        <div className="card text-bg-dark div-Iteem">
            <img src={prod.img} className="card-img img" alt="..."style={{opacity:"0.7",height:"100%",width:"100%"}}/>
              <div className="card-img-overlay">
                <h5 className="card-title "style={{fontSize:"25px",fontWeight:"bolder",letterSpacing:"2px",textAlign:"center" }}>{prod.title}</h5>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default Item