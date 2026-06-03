document.getElementById("registerBtn").onclick = function () {
    alert("Registered Successfully!");
};

document.getElementById("categoryFilter").onchange = function (e) {
    console.log("Category selected: " + e.target.value);
};

document.getElementById("searchBox").keydown = function (e) {
    console.log("Searching: " + e.target.value);
};