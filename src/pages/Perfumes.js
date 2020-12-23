import React from "react";
import "../styles/Perfumes.css";
import SideBar from "../components/SideBar";
import PerfumeCards from "../components/PerfumeCards";

const Perfumes = () => {
	return (
		<>
			<div className="perfume-container">
				<SideBar />
				<PerfumeCards />
			</div>
		</>
	);
};

export default Perfumes;
