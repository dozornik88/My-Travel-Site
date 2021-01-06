import React from "react";
import { Link } from "react-router-dom";
import "../styles/PerfumeCards.css";
import Parfumes from "../data/Parfumes.json";

const parfumes = Parfumes;

const PerfumeCards = () => {
	return (
		<>
			<div className="perfume-card-container">
				<h1>Parfumes</h1>
				{parfumes.slice(0, 45).map((parfumes, key) => (
					<Link
						to={"/parfume-description/" + parfumes.parfume_title}
						className="perfumecards-items"
						key={key}
					>
						<img
							className="perfumecard-pic"
							src={parfumes.parfume_photo}
							alt="perfume pic"
						/>
						<h4>{parfumes.parfume_title}</h4>
					</Link>
				))}
				<div className="load-more">
					<button>Load More</button>
				</div>
			</div>
		</>
	);
};

export default PerfumeCards;
