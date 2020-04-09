let back = document.getElementById("back");

back.onclick = function () {
    location.href = "index.html";
}

window.onload = function () {
    resize();
}

//holds all animal objects.
let farm = [];

//Sorting method (incomplete)
/**function compare(a, b) {
    const scoreA = a.score;
    const scoreB = b.score;

    return scoreB - scoreA;
} */

//retrieves animal objects
function displayfarm() {
    var table = document.createElement("table");
    table.id = "farm";

    firebase.auth().onAuthStateChanged(function (user) {

        db.collection("users").doc(user.uid)
            .collection("animals").get().then(function (snap) {
                snap.forEach(function (doc) {
                    farm.push(doc.data());

                });
            }).then(function () {
                //sort function right here???

                var tr = document.createElement('tr');
                tr.id = "row1";

                var td1 = document.createElement('td');
                td1.id = "cell1";
                var td2 = document.createElement('td');
                td2.id = "cell2";

                var text1 = document.createTextNode("Animal");
                var text2 = document.createTextNode("Name");

                td1.appendChild(text1);
                td2.appendChild(text2);

                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                for (let i = 0; i < farm.length; i++) {

                    var tr = document.createElement('tr');
                    tr.id = "row1";

                    var td1 = document.createElement('td');
                    td1.id = "cell1";
                    var td2 = document.createElement('td');
                    td2.id = "cell2";

                    var text1 = document.createTextNode(farm[i].animal);
                    var text2 = document.createTextNode(farm[i].name);

                    td1.appendChild(text1);
                    td2.appendChild(text2);

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    table.appendChild(tr);
                }
            })
        document.body.appendChild(table);
    })
}
displayfarm();


// window.onload = resize;
window.onresize = resize;

function resize() {
    if (window.innerWidth < 400) {
        document.getElementById("back").style.width = "96vw";
    } else {
        document.getElementById("back").style.width = "25mm";
    }
}