function addToFarm() {
    let animalName = document.getElementById("animalName").value;

    let animalObj = {
        animal: "pig",
        name: animalName
    }

    firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid)
                .collection("animals")
                .add(animalobj);
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

document.getElementById("addToFarm").onclick = addToFarm;
document.getElementById("addToFarm").onclick = function() {
    location.href='myfarm.html'
};