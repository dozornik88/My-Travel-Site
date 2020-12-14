import React from "react";
import NotesCategory from "../data/NotesCategory.json";
import AllNotes from "../data/AllNotes.json";

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
			<div>
				{AllNotes.map((notecat) => {
					return (
						<>
							<img src={notecat.photo} alt="note" />
							<h4>{notecat.title}</h4>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Notes;
