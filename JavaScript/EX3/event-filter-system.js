const events = [
    { name: "Music Show", seats: 10, active: true },
    { name: "Old Workshop", seats: 0, active: true },
    { name: "Dance Event", seats: 5, active: false }
];

events.forEach(event => {
    if (event.active && event.seats > 0) {
        console.log("Available: " + event.name);
    } else {
        console.log("Hidden: " + event.name);
    }
});

try {
    let seats = 0;

    if (seats <= 0) {
        throw "No seats available";
    }
} catch (err) {
    console.log("Error: " + err);
}
