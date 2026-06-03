const defaultCategory = "General";

function createEvent(name = "Unknown Event", category = defaultCategory) {
    return { name, category };
}

const event1 = createEvent("Music Night", "Music");

const eventList = [event1];
const clonedList = [...eventList];

const { name, category } = event1;

console.log(name);
console.log(category);
console.log(clonedList);
