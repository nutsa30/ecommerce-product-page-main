import SneakerImg from '../assets/images/image-product-1.jpg'
import decrement from '../assets/images/icon-minus.svg'
import increment from '../assets/images/icon-plus.svg'
import CartImg from '../assets/images/icon-cart-black.svg'
import Image1 from '../assets/images/image-product-1.jpg'
import Image2 from '../assets/images/image-product-2.jpg'
import Image3 from '../assets/images/image-product-3.jpg'
import Image4 from '../assets/images/image-product-4.jpg'
import { useState } from 'react'
import LeftArrow  from '../assets/images/icon-previous.svg'
import RightArrow from '../assets/images/icon-next.svg'






export const Product = ({ onAddToCart }) => {

  
  
    const [currentImage, setCurrentImage] = useState(SneakerImg);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const images = [ Image1, Image2, Image3, Image4];



 


  const handlePrevImage = () => {
    const currentIndex= images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };
  
  const handleNextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length; 
    setCurrentImage(images[nextIndex]);
  };
  






  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };
  
  
  const closeModal = () => setIsModalOpen(false);
  
  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc); 
    setIsModalOpen(true);
  };
  
  


  const [count,setCount]= useState(0)

  const handleAddToCart = () => {
    if (count > 0) {
     
      onAddToCart(count); 
    } else {
      alert("Please select a quantity before adding to the cart!");
    }
  };
  return (

    <div className="product-container">          
           <div  className="product-container-img">
                <img  onClick={() => handleImageClick(SneakerImg)}  className='main-sneaker-img' src={SneakerImg} alt="" />
                  
                  <div className='small-images'>
                    {images.map((image,name)=>(
                      <img
                      key={name}
                      className='image-small'
                      src={image}
                      alt={`Thumbnail ${name}`}
                      onClick={() => handleImageClick(image)}
                      />
                    ))}
                    
                    

                  </div>







                       


                {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

          <div className="modal-image-container">
          <button className="nav-button left" onClick={handlePrevImage}>
       
          <img src={LeftArrow} alt="" />
          </button>   

          <button className="nav-button right" onClick={handleNextImage}>
            <img src={RightArrow} alt="" />
         </button>


         </div>




          <img className="modal-image" src={currentImage} alt="" />
                 
                 <div className="modal-thumbnails">
                  {images.map((image,name)=>(
                    <img
                    key={name}
                    className={`modal-thumbnail ${
                      currentImage===image? "active":""
                      }`}
                      src={image}
                      alt=""
                      onClick={() => setCurrentImage(image)}
                      />
                  ))}

                 </div>

            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}

            </div>
    
            <div className="product-info">
                <h4>SNEAKER COMPANY</h4>
                <h2>Fall Limited Edition Sneakers</h2>
                <p className="product-describe">These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole,they'll withstand everything the weather can offer.</p>

               <div className='prices'>
                <p className="product-curr-price">
                $125.00 <button className="discount-btn">50%</button></p>
                <small className="product-old-price">$250.00</small>

               </div>
              

             
    

                <div className='add-to-cart-container'>


                <p className="product-amount"> 
                  
                  <img 
                 onClick={() => setCount(count > 0 ? count - 1 : 0)}src={decrement} alt="" />{count}
                 <img 
                  onClick={()=> setCount(count+1)} src={increment} alt="" />
                 
                 </p>


                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    <img src={CartImg} alt="" />
                    Add to cart</button>

                </div>
                </div>
            
                    



        
    </div>
  )
}
