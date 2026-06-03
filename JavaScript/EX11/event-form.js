document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = e.target;

    let name = form.elements.username.value;
    let email = form.elements.email.value;

    if (name === "" || email === "") {
        document.getElementById("error").innerText = "All fields required!";
        return;
    }

    alert("Form Submitted Successfully");
});
