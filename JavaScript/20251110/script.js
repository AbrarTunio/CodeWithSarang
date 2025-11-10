let titleOne = document.getElementById("title1");
let titleTwo = document.getElementById("title2");
let titleThree = document.getElementById("title3");

let btnTwo = document.getElementById("btn2");
let btnThree = document.getElementById("btn3");

function changeTitleOne() {
  titleOne.innerHTML = "I am changed";
}

btnTwo.onclick = function () {
  titleTwo.innerHTML = "I have changed title 2";
};

btnThree.addEventListener("click", () => {
  titleThree.innerHTML = "Changed Three!";
});
