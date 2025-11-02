const obj = {
    userName: "Kajal",
    price: 999,
    welcomeMessage: function () {
        // console.log(`${userName} welcome`) //can not define this throw an error not defined
        console.log(`${this.userName} welcome`) //this focused on current context like this is related to obj object

    }
}

// console.log(obj.welcomeMessage) //return type [Function: welcomeMessage]
obj.welcomeMessage();
// change user name
obj.userName = "singh";
obj.welcomeMessage();

//this didn't work for all the functions weather its arrow or normal one
// this only works for object only
function chai() {
    let userName = "Kajal";
    console.log(this.userName);
}

const chaiOne = function () {
    let userName = "Kajal";
    console.log(this.userName);
}

const chaiTwo = () => {
    let userName = "Kajal";
    console.log(this.userName);
}

chai();
chaiOne();
chaiTwo();

//ways to write arrow functions 
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//when you write {} for function you have to write return keyword but if you use 
// () you dont need to write this way will gonna use in react most
const addTwo = (num1, num2) => (num1 + num2);


console.log(addTwo(2, 4));