let name = true;
let surname = "Tunio";

let num = 15;
let choice = false;

// alert(name);
// console.log(name);
// console.error(name);
// document.body.innerText = "Triggered from JS";
// document.body.innerText = "... from JS";
// document.body.innerHTML = "<h1>" + name + " " + surname + "</h1>";

// Template Literal
document.body.innerHTML = `
   <h1>My name is Engr. ${name} Hussain ${surname} </h1>
   <p> Lorem Ipsum, This is dummy Text </p>
`;

console.log(typeof num);
console.log(typeof choice);
console.log(typeof name);

x = 15;
y = 19;

x = y;
