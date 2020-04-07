let chickenB = document.getElementById("chicken");
let pigB = document.getElementById("pig");
let cowB = document.getElementById("cow");
let horseB = document.getElementById("horse");
let sheepB = document.getElementById("sheep");
let dogB = document.getElementById("dog");
let backB = document.getElementById("back");

function Animal(type) {
    this.type = type;
}

chickenB.onclick = function () {
    let newAnimal = new Animal("chicken");
    localStorage.setItem("chicken", newAnimal.type);
    //console log TEST
    console.log(localStorage.getItem("chicken"));
    location.href = "chicken.html";
}

pigB.onclick = function () {
    let newAnimal = new Animal("pig");
    localStorage.setItem("pig", newAnimal.type);
    location.href = "pig.html";
}

cowB.onclick = function () {
    let newAnimal = new Animal("cow");
    localStorage.setItem("cow", newAnimal.type);
    location.href = "cow.html";
}

horseB.onclick = function () {
    let newAnimal = new Animal("horse");
    localStorage.setItem("horse", newAnimal.type);
    location.href = "horse.html";
}

sheepB.onclick = function () {
    let newAnimal = new Animal("sheep");
    localStorage.setItem("sheep", newAnimal.type);
    location.href = "sheep.html";
}

dogB.onclick = function () {
    let newAnimal = new Animal("dog");
    localStorage.setItem("dog", newAnimal.type);
    location.href = "dog.html";
}

backB.onclick = function () {
    location.href = "main.html";
}