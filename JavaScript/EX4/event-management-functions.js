let events = [];

function addEvent(name, category) {
    events.push({ name, category });
}

function registerUser(name) {
    console.log(name + " registered");
}

function filterEventsByCategory(category, callback) {
    const result = events.filter(e => e.category === category);
    callback(result);
}

function registrationCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = registrationCounter();

addEvent("Music Night", "Music");
addEvent("Coding Workshop", "Tech");

console.log(counter());
console.log(counter());

filterEventsByCategory("Music", data => {
    console.log("Filtered:", data);
});
