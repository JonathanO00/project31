function addToFarm() {
    document.getElementById("addToFarm").addEventListener("click", function () {
        let animalName = document.getElementById("animalName").value;

        let animalObj = {
            animal: sessionStorage.getItem("animal"),
            name: animalName
        }

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                db.collection("users").doc(user.uid)
                    .collection("animals")
                    .add(animalObj);
            } else {
                alert("You aren't signed in. How????");
            }
        })
    })
}

addToFarm();

document.getElementById("farmDirect").onclick = function () {
    setTimeout(function () {
        location.href = 'myfarm.html'
    }, 10);
};
