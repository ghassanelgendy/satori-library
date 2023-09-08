const HTMLlibrary = document.getElementById("library");
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
function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

//Add a new Book object to theLibrary Array
function addBookToLibrary() {
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	const newBook = new Book(title, author, pages);
	theLibrary.push(newBook);
	let HTMLbook = HTMLlibrary.appendChild(document.createElement("div"));
	HTMLbook.classList.add("book", "curve-proto", "expand");
	let cover = document.createElement("img");
	cover.src = "./img/book-img.png";
	HTMLbook.appendChild(cover);
	let HTMLdetails = HTMLbook.appendChild(document.createElement("div"));
	HTMLdetails.classList.add("details");
	let h3 = document.createElement("h3");
	h3.textContent = `By ${author}`;
	let h2 = document.createElement("h2");
	h2.textContent = title;
	let p = document.createElement("p");
	p.textContent = `pages: ${pages}`;

	HTMLdetails.appendChild(h2);
	HTMLdetails.appendChild(h3);
	HTMLdetails.appendChild(p);

	console.log(theLibrary);
}

//Disable default submitting action for the "submit button"
addBookBtn.addEventListener("click", (e) => {
	e.preventDefault();
	addBookToLibrary();
});
