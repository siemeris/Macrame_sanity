import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import Link from "next/link"

import { Cart } from "./";
import { useStateContext } from '../context/StateContext';
import { Contact } from './';


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




					<ul className="nav-list ps-0" data-content-field="navigation-mainNav" id="yui_3_17_2_1_1663426122358_177">

						<li className="nav-item active-link">
							<button type="button" className="nav-link" href="/">
								<Link href="/">
								<span className="nav-link-text">GALERÍA </span>
								</Link>
							</button>
						</li>
						{"  "}
						{/* <li className="nav-item " id="yui_3_17_2_1_1663426122358_176">
							<Link href="/products" className="nav-link" id="yui_3_17_2_1_1663426122358_175">
								<span className="nav-link-text">TIENDA</span>
							</Link>
						</li>
						{"  "}

						<li className="nav-item ">
							<Link href="/about" className="nav-link">
								<span className="nav-link-text">ACERCA DE</span>
							</Link>
						</li> */}
						{"  "}

						<li className="nav-item">
							<button  type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
								<span className="nav-link-text">CONTACTO</span>
							</button>
						</li>



					</ul>
					<button type="button" className="cart-icon position-absolute top-0 end-0 me-4 mt-1" onClick={() => setShowCart(true)}>
							<AiOutlineShopping />
							<span className="cart-item-qty">{totalQuantities}</span>
						</button>
						{showCart && <Cart />}
				</div>

			</nav>
			<div className="p-1 text-center">
				{/* <div style={{ backgroundImage: `url(${background})` }}> */}


				<h1 className="site-title mb-3">Estiesta Macramé</h1>
				<p className="site-tagline mb-3">Hecho a mano desde la Sierra de Madrid</p>
			</div>

			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h2 className="modal-title" id="exampleModalLabel">Contáctame</h2>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<Contact />
						</div>
						{/* <div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar