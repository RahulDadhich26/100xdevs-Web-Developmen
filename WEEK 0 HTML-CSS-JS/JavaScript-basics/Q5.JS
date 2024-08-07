// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

let arr = [
    {
        name: "RAHUL DADHICH",
        age: 25
    },
    {
        name: "YAMAN DADHICH",
        age: 15
    },
    {
        name: "RAJESH DADHICH",
        age: 20
    }
];
function EligiblerUsers(users){
    return users.filter(user => user.age >= 18);
};

console.log(EligiblerUsers(arr));
