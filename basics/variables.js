const accountId = 1234;
let accountEmail = "Account@gmail.com";
var accountName = "name";
accountCity = "delhi";
let data;  //undefined

/*
Prefer let always because of issue in bloack scope and functional scope
*/

//table will show the output it help you not write console.log every time
console.table([accountId, accountEmail, accountName, accountCity]);
