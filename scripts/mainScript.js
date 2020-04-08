let start = document.getElementById("start");
let farm = document.getElementById("myFarm");
let settings = document.getElementById("settings");
let loginButton = document.getElementById("loginHere");
let greeting = document.getElementById("greeting");
let logoutButton = document.getElementById("logout");

//Redirecting functions for different pages.
start.onclick = function () {
    location.href = 'choose.html'
}

farm.onclick = function () {
    location.href = 'myfarm.html'
}

settings.onclick = function () {
    location.href = 'SettingsPage.html'
}

loginButton.onclick = function() {
    location.href = 'login.html'
}

logoutButton.onclick = function() {
    firebase.auth().signOut();
}

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//Display greeting if signed in, otherwise display login / signup button.
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
        greeting.innerHTML = "Hello, " + user.displayName;
    } else {
        greeting.style.display = "none";
        logoutButton.style.display = "none";
        document.getElementById("logoutDiv").style.display = "none";
        loginButton.style.display = "block";
    }
})