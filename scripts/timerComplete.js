function addToFarm() {
    document.getElementById("addToFarm").addEventListener("click", function () {
        let animalName = document.getElementById("animalName").value;

        let animalObj = {
            animal: "pig",
            name: animalName
        }

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                db.collection("users").doc(user.uid)
                    .collection("animals")
                    .add(animalObj);
            } else {
                alert("You aren't signed in. How????");
            }
        })
    })
}

/*document.getElementById("addToFarm").onclick = function () {
    location.href = 'myfarm.html'
};*/

addToFarm();