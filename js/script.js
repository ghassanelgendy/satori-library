const book = document.querySelectorAll(".book");
const addBookModalBtn = document.querySelector(".add");
const addBookModal = document.querySelector(".modal");
const addBookBtn = document.getElementById("addBookBtn");
const modal = document.querySelector(".modal");
const except = document.querySelector("form");
const theLibrary = [];

//Load the "add button" modal
addBookModalBtn.addEventListener("click", () => {
	console.log("wee");
	addBookModal.classList.add("visible");
});

//Close modal by clicking anywhere out of it
modal.addEventListener(
	"click",
	function () {
		addBookModal.classList.remove("visible");
	},
	false
);
except.addEventListener(
	"click",
	function (e) {
		e.stopPropagation();
	},
	false
);

//Close modal by clicking escape button
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		addBookModal.classList.remove("visible");
	}
});

//Constructor for "Book"
function Book() {
	title;
	author;
	pages;
	isRead = false;
}

//Add a new Book object to theLibrary Array
function addBookToLibrary(title, author, pages, isRead) {}

//Disable default submitting action for the "submit button"
addBookBtn.addEventListener("click", (e) => {
	e.preventDefault();
});
