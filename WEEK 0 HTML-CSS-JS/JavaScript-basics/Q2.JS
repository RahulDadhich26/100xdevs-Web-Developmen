// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greetUser(user) {
    let salutation = "Mr";
    if (user.gender === "female") {
        salutation = "Mrs";
    } else if (user.gender !== "male") {
        salutation = "Others";
    }
    console.log(`Hi ${salutation} ${user.name}, your age is ${user.age}`);
}

let newUser = {
    name: "harkirat",
    age: 21,
    gender: "male"
};
let newUser2 = {
    name: "AASTHAA",
    age: 21,
    gender: "female"
};
let newUser3 = {
    name: "RAHUL",
    age: 21,
    gender: "others"
};

greetUser(newUser);
greetUser(newUser2);
greetUser(newUser3);