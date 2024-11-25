import ItemImg from '../assets/images/image-product-1-thumbnail.jpg'
import TrashImg from '../assets/images/icon-delete.svg'

const CheckOutCart = ({
  isVisible,
  cartCount ,
  cartItemVisible,
  handleRemoveFromCart}) => {
  if (!isVisible) return null;
  
  
  if (cartCount === 0 || !cartItemVisible) {
    return (
      
      <div className="check-out-cart">
        <h3>Cart</h3>
        <p>Your cart is empty</p>
      </div>
    );
  }
  
  const totalPrice = 125 * cartCount;

  return (
    <div className="check-out-cart">
      <h3>Cart</h3>

      <div className="check-out-info">
        
        <img className='item-img' src={ItemImg} alt="" />

        <div className="check-out-items-amount">

        <h6>Fall Limited Edition Sneakers</h6>
        <div className='check-out-amounts'>
        <span>$125.00</span>
        <span>x {cartCount}</span>
        <p className="check-out-items-total-amount">
          ${totalPrice}</p>

        </div>

        </div>

        <img onClick={handleRemoveFromCart} className='trash-img' src={TrashImg} alt="" />
      </div>
      
      <button >Checkout</button>

    </div>
  )
}

export default CheckOutCart