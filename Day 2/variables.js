const accountId=12345
let accountEmail="nandini@gmail.com"
var accountPassword="123456"
accountCity="Dhule"//it is also decalre varible but dont use it because it is global variable and can be access anywhere in the program

let accountState; //undefined

//accountId=456; not allowed because accountId is a constant variable
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* This is commmment  prefer not to use var bcoz of issue of block scope and functional scope*/
