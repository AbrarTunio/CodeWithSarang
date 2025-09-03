// lecture2 = "Revision";

// let ans = confirm("Ready...");
// console.log(typeof ans);

// string
// bool
// number

// let fname = "Abdul";
// let age = 20;

// console.log(fname + " is " + age + " years old");
// Template literal
// console.log(`${fname} is ${age} years old`);

// document.body.innerHTML =
//   "<h1>" + fname + " is " + age + " years old" + "</h1>";

// document.body.innerHTML = `<h1>${fname} is ${age} years old </h1>`;

let num1 = 5;
let num2 = 2;

add = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;

remainder = num1 % num2;
expo = num1 ** num2;

document.body.innerHTML = `
<ul>
    <li>The addition of two is: ${add}</li>
    <li>The subtraction of two is: ${sub}</li>
    <li>The Mul of two is: ${mul}</li>
    <li>The Div of two is: ${div}</li>
    <li>The Remainder of two is: ${remainder}</li>
    <li>The Exponent of two is: ${expo}</li>
</ul>
`;

// Operator Precendence

// brackets
// exponent
// division
// multiplication
// addition or subtraction

a = Number(prompt("Enter the value of a: "));
b = Number(prompt("Enter the value of b: "));

output = (a + b) ** 2;
console.log("The output of a and b square is:", output);
