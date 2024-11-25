

import './App.css'
import { useState } from 'react';
import CheckOutCart from './components/CheckoutCart'
import { Nav } from './components/Nav'
import { Product } from './components/Product'



function App() {
  const [cartItemVisible, setCartItemVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);
  


  


  const toggleCartVisibility = () => {
    setCartVisible((cartVisible) => !cartVisible); 
  };

 

  const handleAddToCart = (quantity) => {
    if (quantity>0){
    setCartCount(quantity);
    setCartItemVisible(true);

  }else {
    alert('Please select a quantity before adding to the cart!');
  }
};
  

  const handleRemoveFromCart = () => {
    setCartCount(0)
    setCartItemVisible(false);
    
  };

  return (
    <>

  <div className='main-container'>

    <Nav cartCount={cartCount} toggleCartVisibility={toggleCartVisibility} />
     {cartVisible &&(
      <CheckOutCart 
      cartCount={cartCount}
       isVisible={cartVisible}
       cartItemVisible={cartItemVisible}
       handleRemoveFromCart={handleRemoveFromCart} 
       />

     )}
    
     <Product onAddToCart={handleAddToCart}/>

  </div>
   
    </>
  )
}

export default App
