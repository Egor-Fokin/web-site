var myImage = document.querySelector("img")

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src")
    if (mySrc === "images/Workspace of programmist.jpg") {
        myImage.setAttribute("src","Images/kartinki24_ru_summer_276.jpg")
    }
    else {
        myImage.setAttribute("src","images/Workspace of programmist.jpg")
    }
};

var myButton = document.querySelector("button")
var myHeading = document.querySelector("h1")

function setUserName(){
    var myName = prompt("Введите Ваше имя")
    localStorage.setItem("name", myName)
    myHeading.textContent = "Программирование это круто, " + myName + "!"
}

if (!localStorage.getItem("name")){
    setUserName()
}
else {
    var storedName = localStorage.getItem("name")
    myHeading.textContent = "Программирование это курто, " + storedName + "!"
}

myButton.onclick = function (){
    setUserName()
}






/*
alert("Hi!")

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
  }

multiply(23, 1)

document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  };
*/