document.getElementById("debugForm").addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form submitted");

    let name = document.getElementById("name").value;
    console.log("Name entered:", name);

    if (!name) {
        console.error("Name is empty");
    } else {
        console.log("Valid input");
    }
});

