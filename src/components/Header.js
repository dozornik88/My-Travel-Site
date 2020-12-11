import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Header.css";

import Button from "./Button";

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						Travel Blog
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>

					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-links">
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products" className="nav-links">
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/sign-up" className="nav-links-mobile">
								Sign up
							</Link>
						</li>
					</ul>
					<Button />
				</div>
			</nav>
		</>
	);
};

export default Header;
