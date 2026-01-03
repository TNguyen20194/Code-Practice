// Step 1: raw data
const users = [
  { name: "Anna", age: 17 },
  { name: "John", age: 22 },
  { name: "Mike", age: 15 },
  { name: "Sara", age: 30 }
];

// Step 2: small, focused functions


function userNameandAge(user) {
    return `${user.name} (${user.age})`
}

function getAdultNames(users) {
  console.log(users)
  return users
    .filter(userOver25)
    .map(userNameandAge);
}

// Step 3: use them
const adultNames = getAdultNames(users);
console.log(adultNames);


/*
 > Return users 25 or older
 > Format: ["John" (22), "Sara" (30)]
*/
function userOver25(user) {
    console.log(user.age)
    return user.age >=25
}

