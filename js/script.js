const HTMLlibrary = document.getElementById("library");
const addBookModalBtn = document.querySelector(".add");
const addBookModal = document.querySelector(".modal");
const addBookBtn = document.getElementById("addBookBtn");
const modal = document.querySelector(".modal");
const except = document.querySelector("form");
const hereLink = document.getElementById("clickLink");
let theLibrary = [];
//Load the "add button" modal
hereLink.addEventListener("click", (e) => {
	console.log("wee");
	e.preventDefault();
	addBookModal.classList.add("visible");
});

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
	this.isRead = false;
}

//Add a new Book object to theLibrary Array
function addBookToLibrary() {
	const firstTime = document.querySelector(".firstLoad");
	firstTime.style.display = "none";
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	const newBook = new Book(title, author, pages);
	theLibrary.push(newBook);
	let HTMLbook = HTMLlibrary.appendChild(document.createElement("div"));
	HTMLbook.classList.add("book", "curve-proto", "expand", "read");
	HTMLbook.dataset.index = theLibrary.length;
	let bookStatus = document.createElement("span");
	bookStatus.classList.add("status");
	let cover = document.createElement("img");
	cover.src = "./images/book-img.png";
	HTMLbook.appendChild(bookStatus);
	HTMLbook.appendChild(cover);
	let HTMLdetails = HTMLbook.appendChild(document.createElement("div"));
	HTMLdetails.classList.add("details");
	let h3 = document.createElement("h3");
	h3.textContent = `By ${author}`;
	let h2 = document.createElement("h2");
	h2.textContent = title;
	let p = document.createElement("p");
	p.textContent = `pages: ${pages}`;
	let modify = document.createElement("div");
	modify.classList.add("modify-overlay", "curve-proto");
	let deleteButton = document.createElement("button");
	let markAsButton = document.createElement("button");
	deleteButton.classList.add("curve-proto", "delete");
	deleteButton.textContent = "Delete";
	markAsButton.textContent = "Mark as read";
	markAsButton.classList.add("curve-proto", "markAs");
	modify.appendChild(markAsButton);
	modify.appendChild(deleteButton);
	HTMLdetails.appendChild(h2);
	HTMLdetails.appendChild(h3);
	HTMLdetails.appendChild(p);
	HTMLbook.appendChild(modify);
	console.log(theLibrary);
	deleteButton.addEventListener("click", (e) => {
		removeBook(HTMLbook);
		console.log(theLibrary);
	});
	markAsButton.addEventListener("click", (e) => {
		if (!newBook.isRead) {
			newBook.isRead = true;
			markAsButton.textContent = "Mark as unread";
			bookStatus.style.backgroundColor = "darkgreen";
		} else {
			newBook.isRead = false;
			markAsButton.textContent = "Mark as read";
			bookStatus.style.backgroundColor = "darkred";
		}
		console.log(newBook);
	});
}
function removeBook(book) {
	console.log(book);
	console.log(book.dataset.index);
	book.style.display = "none";
	theLibrary.splice(book.index, 1);
}

//Disable default submitting action for the "submit button"
addBookBtn.addEventListener("click", (e) => {
	e.preventDefault();
	addBookToLibrary();
	clearForm();
	addBookModal.classList.remove("visible");
});

//Function to clear the form
function clearForm() {
	const formInputs = document.querySelectorAll("input");
	formInputs.forEach((input) => {
		input.value = "";
	});
}
