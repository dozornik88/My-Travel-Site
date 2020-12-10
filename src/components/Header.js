import { Link } from "react-router-dom";
import React from "react";
import "../styles/Header.css";

import Button from "./Button";
import Bars from "./Bars";

const Header = () => {
	return (
		<>
			<div className="nav-container">
				<Link to="/" className="navlink">
					WorldTravel
				</Link>
				<Bars />
				<div className="navmenu"></div>
				<div className="navbtn">
					<Link to="/pagetwo">
						<Button />{" "}
					</Link>
				</div>
			</div>
		</>
	);
};

export default Header;
