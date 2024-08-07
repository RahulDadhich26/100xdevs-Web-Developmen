
// Write a function that takes an array of users as inputs and returns only the users who are more than 18
function filterAdultMales(users) {
    return users.filter(user => user.age > 18 && user.gender === 'male');
}
const users = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Jane', age: 22, gender: 'female' },
    { name: 'Mike', age: 17, gender: 'male' },
    { name: 'Sara', age: 19, gender: 'female' }
];
console.log(filterAdultMales(users));
