import React from "react";
import "../styles/Button.css";

const Button = (props) => {
	return <button className="btn btn-mobile">{props.children}</button>;
};

export default Button;
