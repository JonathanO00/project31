function addToFarm() {
    let animalName = document.getElementById("animalName").value;

    // Add a new document in collection "animals"
    db.collection("users").doc(user.uid).set({ //How do you refer to a user's auto-generated ID?????
            animal: pig,
            name: animalName
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}