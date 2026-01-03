const users = [
  { profile: { name: 'Anna', age: 17 }, role: 'client' },
  { profile: { name: 'John', age: 22 }, role: 'admin' },
  { profile: { name: 'Sara', age: 30 }, role: 'admin' }
]

// Show who are 25+
// Sara (30) – Admin”

function getName (user) {
  return user.profile.name
};

function getAge (user) {
  return user.profile.age
};

function is25OrOlder (user) {
  return getAge(user) >= 25
};

function isAdmin (user) {
  return user.role === 'admin'
};

function isClient (user) {
  return user.role === 'client'
};

function capitalizeUser (text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
};

// Name - Age - Role format
function userNameAndAge (user) {
  return `${getName(user)} (${getAge(user)}) - ${capitalizeUser(user.role)}`
};

// Name - Role format
function userRoleFormat (user) {
  return `${getName(user)} - ${capitalizeUser(user.role)}`
};

function getQualifiedAdmin (users) {
  return users
  .filter(is25OrOlder)
  .filter(isAdmin)
  .map(userNameAndAge)
};

const result = getQualifiedAdmin(users)
console.log(result)

/*
 TASK 2

New format:
"Name - Role"
*/


/*
 TASK 3
Current data shape

{ name, age, role }

Change user to:
{ profile: {name, age}, role }
*/
