import './App.css';
import { useState } from 'react';
function Price() {
  const [price, changePrice] = useState(0);
  const update1=()=>{
    changePrice(price+150)
  }
  const update2=()=>{
    changePrice(price-150)
  }
  return (
    <>
    <h3 className='price'>Price : ${price}</h3>
    <button onClick={update1}>Add</button>
    <button onClick={update2}>Remove</button>
    </>
  );
}

export default Price;