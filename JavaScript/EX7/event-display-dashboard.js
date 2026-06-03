const events = [
    "Music Night",
    "Dance Show",
    "Tech Meetup"
];

const container = document.querySelector("#eventContainer");

events.forEach(event => {
    let card = document.createElement("div");

    card.innerHTML = `
        <p>${event}</p>
        <button onclick="registerEvent(this)">Register</button>
    `;

    container.appendChild(card);
});

function registerEvent(btn) {
    btn.parentElement.innerHTML = "Registration Successful";
}

