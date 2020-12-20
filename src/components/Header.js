import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/images/logo1.png";
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
						Noterance <img alt="logo" src={logo} className="logo" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>

					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Fragrances
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/notes" className="nav-links" onClick={closeMobileMenu}>
								Notes
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/perfumes"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Perfumes
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to="/sign-up"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign up/Log in
							</Link>
						</li>
					</ul>
					<Button className="left-btn">Sign Up</Button>
					{/* <button className="right-btn">Sign In</button> */}
				</div>
			</nav>
		</>
	);
};

export default Header;
