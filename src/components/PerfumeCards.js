import React from "react";
import "../styles/PerfumeCards.css";
import Parfumes from "../data/Parfumes.json";

const parfumes = Parfumes;

const PerfumeCards = () => {
	return (
		<>
			<div>
				{parfumes.slice(0, 10).map((parfumes) => (
					<div className="perfumecards-items">
						<img
							className="perfumecard-pic"
							src={parfumes.parfume_photo}
							alt="perfume pic"
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default PerfumeCards;
