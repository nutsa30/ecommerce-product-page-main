import React, {useEffect, useState } from 'react'
import CartImg from '../assets/images/icon-cart.svg'
import AvatarImg from '../assets/images/image-avatar.png'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-close.svg'




export const Nav = ({ cartCount, toggleCartVisibility }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 430);
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const handleImageClick = () => {
    if (isSmallScreen) {
      setShowButtons(!showButtons);
    }
  };

  const handleCloseClick = () => {
    setShowButtons(false); 
  };



  return (
    <div className="header-container">
      <div className="nav-header">
        <div className="imgs">
          <img
           onClick={handleImageClick}
            className="menu" 
            src={Menu} 
            alt="Menu"
            style={{ display: isSmallScreen ? 'block' : 'none' }} 
            />
            
            
          <img 
          
           src={Logo} alt="Logo" />
        </div>

        
        {(isSmallScreen && showButtons) || !isSmallScreen ? (
          <>
            {showButtons && <div className="overlay" onClick={handleImageClick}></div>}
            <div className="buttons-box">
              {showButtons && (
                <img onClick={handleCloseClick} className="close-btn" src={closeBtn} alt="Close" />
              )}
              <div className="nav-btns">
                <button className="nav-btn">Collections</button>
                <button className="nav-btn">Men</button>
                <button className="nav-btn">Women</button>
                <button className="nav-btn">About</button>
                <button className="nav-btn">Contact</button>
              </div>
            </div>
          </>
        ) : null}

        <div className="img-div-container">
          <div className="img-div">
            <img onClick={toggleCartVisibility} className="cart-img" src={CartImg} alt="Cart" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          <img className="avatar-img" src={AvatarImg} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};