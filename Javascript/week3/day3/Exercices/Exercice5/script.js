const div = document.getElementsById("container");
console.log(div)



const list = document.getElementName("li");
list[1].innerHTML = "Richard";



const ul = document.getElementName("ul");
ul[1].removeChild(ul[1].getElementsByTagName("li")[1]);


for (const i = 0; i < ul.length; i++) {
    ul[i].getElementsByTagName("il")[0].innerHTML = "Name";
}


for (let i = 0; i < ul.length; i++) {
    ul[i].classlist.add("student_list");
}


ul[0].classList.add("university", "attendance");


div.style.backgroundColor = "lightblue";
div.style.padding = "20px";


for (let i = 0; i < list.length; i++) {
    if (list[i].innerHTML === "Dan") {
        list[i].style.display = "none";
    }
}


for (let i = 0; i < list.length; i++) {
    if (list[i].innerHTML === "Richard") {
        list[i].style.border = "1px solid black";
    }
}


if (div.style.backgroundColor === "lightblue") {
    alert("Hello");
}