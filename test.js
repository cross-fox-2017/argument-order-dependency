let people = {
    person: "test"
}

var people = ["test"]
for (var person in people)
    if people.hasOwnProperty(person) {
    console.log("Hello, " + people[person]);
}
