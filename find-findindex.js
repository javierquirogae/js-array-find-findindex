/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. 
The function should return the first object with the key of username that matches the string passed to the function. 
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
    return usersArray.find(function(o){
        return o.username === username;
    });

}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. 
The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let ind = usersArray.findIndex(function(o){
    return o.username === username;
    console.log(username);
    console.log(o.username);
  });
  console.log(ind);

  let result = usersArray.find(function(o){
    return o.username === username;
  });
  console.log(result);

  if (ind > -1) {
    usersArray.splice(ind, 1);
  }

  return result;
}