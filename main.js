const boxes = document.querySelectorAll(".box1, .box2, .box3, .box4");

boxes.forEach(function (box) {

    box.addEventListener("click", function () {

        if (box.classList.contains("box1")) {
            box.style.backgroundColor = "red";
            box.style.color = "white";
        }

        if (box.classList.contains("box2")) {
            box.style.backgroundColor = "blue";
            box.style.color = "white";
        }

        if (box.classList.contains("box3")) {
            box.style.backgroundColor = "green";
            box.style.color = "white";
        }

        if (box.classList.contains("box4")) {
            box.style.backgroundColor = "yellow";
            box.style.color = "black";
        }

    });

});

const input = document.getElementById("input");
const submit = document.getElementById("submit");
const heading = document.querySelector(".navbar h1");

submit.addEventListener("click", function () {

    const text = input.value.trim();

    if (text !== "") {
        heading.textContent = "Hello, " + text;
    } else {
        heading.textContent = "Hello";
    }

});