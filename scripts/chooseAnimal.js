let chickenB = document.getElementById("chicken");
let pigB = document.getElementById("pig");
let cowB = document.getElementById("cow");
let horseB = document.getElementById("horse");
let sheepB = document.getElementById("sheep");
let dogB = document.getElementById("dog");

function Animal(type) {
    this.type = type;
}

chickenB.onclick = function () {
    let newAnimal = new Animal("chicken");
    localStorage.setItem("chicken", newAnimal.type);
    //console log TEST
    console.log(localStorage.getItem("chicken"));
}

pigB.onclick = function () {
    let newAnimal = new Animal("pig");
    localStorage.setItem("pig", newAnimal.type);
}

cowB.onclick = function () {
    let newAnimal = new Animal("cow");
    localStorage.setItem("cow", newAnimal.type);
}

horseB.onclick = function () {
    let newAnimal = new Animal("horse");
    localStorage.setItem("horse", newAnimal.type);
}

sheepB.onclick = function () {
    let newAnimal = new Animal("sheep");
    localStorage.setItem("sheep", newAnimal.type);
}

dogB.onclick = function () {
    let newAnimal = new Animal("dog");
    localStorage.setItem("dog", newAnimal.type);
}