import React, {useState, useEffect} from "react";

function PlantCard({plant}) {
  const [stock, setInStock] = useState(true)

  //this negates the sold out, ie, it is in stock, use state of sold out being false means it is in stock
  //so the function haandlestock, evaluates to true meaning out of stock
  function handleStock (){
    setInStock(!stock)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {stock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button className="primary" onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
