const book = document.querySelectorAll(".book");

function openModal(el) {}
book.forEach((book) => {
	book.addEventListener("click", openModal());
});
