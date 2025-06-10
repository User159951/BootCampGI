const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");

  // Create book details
  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;

  // Set red color if already read
  if (book.alreadyRead) {
    bookInfo.style.color = "red";
  }

  // Create image element
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  // Append details to div
  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(img);

  // Append div to section
  section.appendChild(bookDiv);
});