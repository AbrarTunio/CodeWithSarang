let firstNum = 2;
let secNum = 3;

totalNum = firstNum ** secNum;

// total = "The sum of " + firstNum + " and " + secNum + " is " + totalNum;
total = `<h1>The result of ${firstNum} and ${secNum} is <span>${totalNum}</span></h1>`;

// console.log(total);

document.body.innerHTML = total;
