allBooks = [
    {
        title : "Naruto, Vol. 67",
        author : "Masashi Kishimoto",
        image : "https://images.booksense.com/images/847/573/9781421573847.jpg",
        alreadyRead : true,
    },
    {
        title : "Naruto, Vol. 72",
        author : "Masashi Kishimoto",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1ZaVmkp8y8uBfESky3OesPArIJD9JLyP-A&s",
        alreadyRead : false,
    }
];

console.log(allBooks[0].title);



section = document.querySelector("section");
for (let i = 0; i < allBooks.length; i++) {
    const book = allBooks[i];
    const div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = `<h2>${book.title} written by ${book.author}</h2>`;
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";
    div.appendChild(img);
    section.appendChild(div);

    if (book.alreadyRead) {
        div.style.color = "red";
    }
}