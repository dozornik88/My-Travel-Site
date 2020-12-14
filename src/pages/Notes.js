import React from "react";
import { Link } from "react-router-dom";
import NotesCategory from "../data/NotesCategory.json";
const Notes = () => {
	return (
		<div>
			<div>
				{NotesCategory.map((post) => {
					return (
						<>
							<h1>{post.title}</h1>
						</>
					);
				})}
			</div>
			Hello world2
			<button>Click</button>
			<Link to="/">Navigate</Link>
		</div>
	);
};

export default Notes;
