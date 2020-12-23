import React from "react";
import "../styles/PerfumeCards.css";
import Parfumes from "../data/Parfumes.json";

const parfumes = Parfumes;

const PerfumeCards = () => {
	return (
		<>
			<div className="perfume-card-container">
				{parfumes.slice(0, 20).map((parfumes) => (
					<div className="perfumecards-items">
						<img
							className="perfumecard-pic"
							src={parfumes.parfume_photo}
							alt="perfume pic"
						/>
						<h4>{parfumes.parfume_title}</h4>
					</div>
				))}
			</div>
		</>
	);
};

export default PerfumeCards;
