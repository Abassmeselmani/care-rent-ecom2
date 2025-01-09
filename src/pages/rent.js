import React from "react";
import image3 from "../images/image13.png";
import rent from "../rental";

import './rent.css';



function Rent() {
  
  return (
    <div className="rent">
        <img className="rent_image1" src={image3}/>
        <h1 className="rent_title">Rent</h1>
        <div className="collection">
            {rent.map((item) =>(
                <div className="collection_item" key={item.id}>
                    <img className="collection_images" src={item.imageURL}  />
                    <span className="collection_name">{item.name}</span>
                    <div className="collection_price">
                    {item.price}
                    <span className="collection-price_slash">{item.wasprice}</span>
                    
                </div>
                <button  className="collection_btn">Add to Cart</button>

                </div>
            


            ) )}


        </div>

    </div>
    
  );
}

export default Rent;
