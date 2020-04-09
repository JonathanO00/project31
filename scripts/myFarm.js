let back = document.getElementById("back");

back.onclick = function () {
    location.href = "index.html";
}

//holds all animal objects.
let farm = [];

//retrieves animal objects
function displayfarm() {
    var table = document.createElement("table");
    var table2 = document.createElement("table");
    table.id = "farm";
    table2.id="label";

    firebase.auth().onAuthStateChanged(function (user) {

        db.collection("users").doc(user.uid)
            .collection("animals").get().then(function (snap) {
                snap.forEach(function (doc) {
                    farm.push(doc.data());

                });
            }).then(function () {

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
                table2.appendChild(tr);

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
            document.body.appendChild(table2);
        document.body.appendChild(table);
    })
}
displayfarm();