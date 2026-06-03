let events = [];

events.push({ name: "Music Night", category: "Music" });
events.push({ name: "Cooking Class", category: "Workshop" });
events.push({ name: "Rock Concert", category: "Music" });

const musicEvents = events.filter(e => e.category === "Music");
console.log("Music Events:", musicEvents);

const formatted = events.map(e => `Workshop on ${e.name}`);
console.log(formatted);
