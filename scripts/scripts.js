function saveVolume() {

    firebase.auth().onAuthStateChanged(function (user) {
        document.getElementById("myform").
        addEventListener("submit", function (e) {
            e.preventDefault();
            var soundVol = document.getElementById("soundVol").value;
            var musicVol = document.getElementById("musicVol").value;
            db.collection("users").doc(user.uid)
                .update({
                    soundvolume: soundVol,
                    musicvolume: musicVol
                })
        })
    })
}
saveVolume();
