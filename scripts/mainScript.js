let start = document.getElementById("start");
let farm = document.getElementById("myFarm");
let settings = document.getElementById("settings");

firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                    start.onclick = function () {
                        location.href = 'page1.html'
                    };

                    farm.onclick = function () {
                        location.href = 'myfarm.html'
                    };

                    settings.onclick = function () {
                        location.href = 'SettingsPage.html'
                    };
                } else {
                    document.getElementsByClassName("button").onclick = function() {
                        location.href = 'login.html'
                    };
                }
            })