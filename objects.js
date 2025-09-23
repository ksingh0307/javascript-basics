// singleton when we declare object using constructor singleton will create not using litterals

// Object literals
const JUsers = {
    // keys : values
    name: "kajal",
    email: "kajal@gmail.com"
}

// #destructuring in objects

const course = {
    courseName: "JavaScript",
    price: "999",
    location: "India"
}

// previously developers get the value using dot . or [] operator
// course.courseName or course["courseName"]

// with the destrcuture operator you can get the key and use globallby
// no need to write course.courseName every time

const { courseName } = course;
// console.log(courseName);

// for react only  
const navBar = ({ topic }) => {
    // to get the property or data in react we have to use 
    // props.topic every time
    // for cleaning the code we can use {topic} 
    // this helps to clean the code
    console.log(topic)
}

navBar(topic = "Destructring");