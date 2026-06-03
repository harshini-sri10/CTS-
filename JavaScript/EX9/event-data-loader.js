const output = document.getElementById("output");

fetch("events.json")
    .then(response => response.json())
    .then(data => {
        output.innerHTML = "Events Loaded Successfully";
        console.log(data);
    })
    .catch(error => {
        console.log("Error loading events", error);
    });

// Async/Await version
async function loadEvents() {
    try {
        let response = await fetch("events.json");
        let data = await response.json();
        console.log("Async Loaded:", data);
    } catch (error) {
        console.log(error);
    }
}

loadEvents();
