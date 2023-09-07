const book = document.querySelectorAll(".book");
const addBookModalBtn = document.querySelector(".add");
const addBookModal = document.querySelector(".modal");
const addBookBtn = document.getElementById("addBookBtn");
addBookModalBtn.addEventListener("click", () => {
	console.log("wee");
	addBookModal.classList.add("visible");
});
const modal = document.querySelector(".modal");
const except = document.querySelector("form");
const theLibrary = [];
function Book() {
	title;
	author;
	pages;
	isRead = false;
}
function addBookToLibrary(title, author, pages, isRead) {}
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		addBookModal.classList.remove("visible");
	}
});
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
