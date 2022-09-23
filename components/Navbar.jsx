import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from "./";
import { useStateContext } from '../context/StateContext';


const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>

			<nav className="nav" id="yui_3_17_2_1_1663426122358_179">

					
					<header className="nav-mobile-header">
						
						{/* <label for="nav-mobile-checkbox" className="nav-mobile-menu-label" onclick="">
							<span className="svg-fallback">☰</span>
							<svg width="12" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1"><path className="burger" d="M0,1 12,1" stroke="#ffffff" stroke-width="2"></path><path className="burger" d="M0,5 12,5" stroke="#ffffff" stroke-width="2"></path><path className="burger" d="M0,9 12,9" stroke="#ffffff" stroke-width="2"></path></svg>
						</label> */}

					</header>

					<div className="nav-container primary-wrapper loaded" id="yui_3_17_2_1_1663426122358_178">




						<ul className="nav-list" data-content-field="navigation-mainNav" id="yui_3_17_2_1_1663426122358_177">


							<li className="nav-item ">
								<a href="/" className="nav-link">
									<span className="nav-link-text">GALLERY</span>
								</a>
							</li>


							<li className="nav-item " id="yui_3_17_2_1_1663426122358_176">
								<a href="/products" className="nav-link" id="yui_3_17_2_1_1663426122358_175">
									<span className="nav-link-text">SHOP</span>
								</a>
							</li>


							<li className="nav-item ">
								<a href="/about" className="nav-link">
									<span className="nav-link-text">ABOUT</span>
								</a>
							</li>


							<li className="nav-item  active-link">
								<a href="/contact" className="nav-link">
									<span className="nav-link-text">CONTACT</span>
								</a>
							</li>



						</ul>
                        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      { showCart && <Cart />}

					</div>

			</nav>

		</>
  )
}

export default Navbar