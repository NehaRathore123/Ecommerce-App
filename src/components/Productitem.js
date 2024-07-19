import React from "react";
import { useLoaderData,useNavigate } from "react-router-dom";

export default function ProductItem() {
  const items = useLoaderData();
  const navigate=useNavigate()

  
  return (
    <>
      <div
      className="card">
        {items.map((item) => (
          <div 
         
          className="card-item" onClick={()=>navigate(`/products/${item.id}`)}>
            <img src={item.image} alt="img"></img>
            <div className="card-body">
              <p>Rs.{item.price}</p>
              <div className="rating">
                <p>{item.rating.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}