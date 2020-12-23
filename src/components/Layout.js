import React from "react";
import Header from "./Header";
import "../styles/GlobalStyles.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
