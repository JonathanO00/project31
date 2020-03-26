function saveBreaks() {
    let length = document.getElementById("bLength").value;
    let interval = document.getElementById("bInterval").value;

    document.getElementById("example").innerHTML = length + " minutes of break per " + interval + " minutes of studying"
    if (length == 0 || interval == 0) {
        document.getElementById("example").innerHTML = "(LENGTH) minutes of break per (INTERVAL) minutes of studying"
    }
}

document.getElementById("save").onclick = saveBreaks;