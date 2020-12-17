import React from "react";
import NotesCategory from "../data/NotesCategory.json";
import AllNotes from "../data/AllNotes.json";
import "../styles/Notes.css";

const noteCategories = NotesCategory;
const allNotes = AllNotes;

function Notes() {
	return (
		<>
			<h1 className="note-category-titles">Categories</h1>
			<div className="note-category-container">
				<a className="note-category-navbar" href="#1">
					Citrus Notes
				</a>
				<a className="note-category-navbar" href="#2">
					Fruit and Vegetable Notes
				</a>
				<a className="note-category-navbar" href="#3">
					Sweets Notes
				</a>
				<a className="note-category-navbar" href="#4">
					Drinks
				</a>
				<a className="note-category-navbar" href="#5">
					Herbs and Spices
				</a>
				<a className="note-category-navbar" href="#6">
					Natural and Synthetic
				</a>
				<a className="note-category-navbar" href="#7">
					Flowers
				</a>
				<a className="note-category-navbar" href="#8">
					Wood
				</a>
			</div>
			<div className="search-notes">
				<input type="text" name="searchbar" placeholder="Search" />
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 1)
					.map((noteCategory) => (
						<h1 id="1">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "CITRUS SMELLS")
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 2)
					.map((noteCategory) => (
						<h1 id="2">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id === "FRUITS, VEGETABLES AND NUTS"
						)
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 3)
					.map((noteCategory) => (
						<h1 id="3">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id === "SWEETS AND GOURMAND SMELLS"
						)
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 4)
					.map((noteCategory) => (
						<h1 id="4">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "BEVERAGES")
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 5)
					.map((noteCategory) => (
						<h1 id="5">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "SPICES")
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id === "GREENS, HERBS AND FOUGERES"
						)
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
				<div>
					{allNotes
						.filter(
							(allNotes) => allNotes.note_category_id === "RESINS AND BALSAMS"
						)
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 6)
					.map((noteCategory) => (
						<h1 id="6">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id ===
								"NATURAL AND SYNTHETIC, POPULAR AND WEIRD"
						)
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
				<div>
					{allNotes
						.filter(
							(allNotes) =>
								allNotes.note_category_id === "MUSK, AMBER, ANIMALIC SMELLS"
						)
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 7)
					.map((noteCategory) => (
						<h1 id="7">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "FLOWERS")
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
				<div>
					{allNotes
						.filter((allNotes) => allNotes.note_category_id === "WHITE FLOWERS")
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
			<div className="note-title">
				{noteCategories
					.filter((noteCategories) => noteCategories.id === 8)
					.map((noteCategory) => (
						<h1 id="8">{noteCategory.title}</h1>
					))}
				<div>
					{allNotes
						.filter(
							(allNotes) => allNotes.note_category_id === "WOODS AND MOSSES"
						)
						.map((allN) => (
							<>
								<div className="note-items">
									<img src={allN.photo} alt="note pic" />
									<h4>{allN.title}</h4>
								</div>
							</>
						))}
				</div>
			</div>
		</>
	);
}

export default Notes;

//Note: all categories code

/* {NotesCategory.map((post) => {
					return (
						<>
							<a href="#2">{post.title}</a>
						</>
					);
				})} */
