// Write a function that takes a user as an input and greets them with their name and age

function greetUser(user) {
    return `Hello ${user.name}, you are ${user.age} years old!`;
}

const user = {
    name: "RAHUL DADHICH",
    age: 25
};

console.log(greetUser(user));