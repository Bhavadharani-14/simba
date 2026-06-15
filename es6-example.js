//let constant
let name="Bhava"
const pi=3.14
console.log(name);
console.log(pi);

//template literals
let age=24
console.log(`my name is $ {name} my age is${pi} `);

//object
const student=
{
    name: "Bhava",
    college: "VETIAS"
}
    console.log(student);

//destructing
const person={
    dept : "ai&ds",
    gender : "male"
}    
const{dept,gender}=person
console.log(dept);



//arrow function
let add=(a,b) => a+b;
console.log(add(10,2));
    

//array
let fruits = ["apple","orange","grapes"]
console.log(fruits);

//sperad operator
const updatedfruits =[
    ...fruits,
    "stabbary"
];
console.log(updatedfruits);

//rest oprator
function maximarks(...marks)
{
    let max = Math.max(...marks)
    return max
}
console.log("maximarks:",maximarks(80,90,70));

