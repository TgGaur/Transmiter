
var firebaseConfig = {
    apiKey: "AIzaSyBPqqfAIOFBhilsH4XcpBVvQptd3xjJi8k",
    authDomain: "forplane20.firebaseapp.com",
    databaseURL: "https://forplane20-default-rtdb.firebaseio.com",
    projectId: "forplane20",
    storageBucket: "forplane20.appspot.com",
    messagingSenderId: "9897880814520",
    appId: "1:989780814520:web:7c03c00d5a2f41510b624d"
};
firebase.initializeApp(firebaseConfig);

document.addEventListener("keypress", kep)


function kep(event) {
    keypress = event.keyCode;
    console.log(keypress);

    if (keypress >= 48 && keypress <= 57) {
        console.log("ok")
        firebase.database().ref("/").child("speed").update({
            Speed: parseInt(event.key)
        });
        document.getElementById("spe").innerHTML = "Motor Speed: " + event.key;
        document.getElementById("r1").style.borderColor = "green";
        document.getElementById("r1").style.borderWidth = "10px";
        document.getElementById("r1").style.borderStyle = "solid";

    }


    if (event.key == "s") {
        console.log("elevationup");
        firebase.database().ref("/").child("elevation").update({
            Elevation: 1
        });
        document.getElementById("key2").innerHTML = "Key Pressed: S"
        document.getElementById("ele").innerHTML = "Elevation: UP"

        document.getElementById("r2").style.borderColor = "green";
        document.getElementById("r2").style.borderWidth = "10px";
        document.getElementById("r2").style.borderStyle = "solid";
    }
    if (event.key == "w") {
        console.log("elevationdown");
        firebase.database().ref("/").child("elevation").update({
            Elevation: 11
        });
        document.getElementById("key2").innerHTML = "Key Pressed: W"
        document.getElementById("ele").innerHTML = "Elevation: DOWN"

        document.getElementById("r2").style.borderColor = "green";
        document.getElementById("r2").style.borderWidth = "10px";
        document.getElementById("r2").style.borderStyle = "solid";

    }

    if (event.key == "a") {
        console.log("pitchleft");
        firebase.database().ref("/").child("pitch").update({
            Pitch: 2
        });
        document.getElementById("key").innerHTML = "Key Pressed: A"
        document.getElementById("pit").innerHTML = "Pitch: LEFT"

        document.getElementById("r3").style.borderColor = "green";
        document.getElementById("r3").style.borderWidth = "10px";
        document.getElementById("r3").style.borderStyle = "solid";
    }
    if (event.key == "d") {
        console.log("pitchright");
        firebase.database().ref("/").child("pitch").update({
            Pitch: 22
        });
        document.getElementById("key").innerHTML = "Key Pressed: D"
        document.getElementById("pit").innerHTML = "Pitch: RIGHT"

    }
}

document.addEventListener("keyup", keyuppp)


function keyuppp(event) {
    console.log("keyup")
    document.getElementById("r1").style.borderColor = "#bb44c3";
    document.getElementById("r1").style.borderWidth = "5px";
    document.getElementById("r1").style.borderStyle = "solid";
    document.getElementById("r2").style.borderColor = "#bb44c3";
    document.getElementById("r2").style.borderWidth = "5px";
    document.getElementById("r2").style.borderStyle = "solid";
    document.getElementById("r3").style.borderColor = "#bb44c3";
    document.getElementById("r3").style.borderWidth = "5px";
    document.getElementById("r3").style.borderStyle = "solid";

    document.getElementById("key2").innerHTML = "Key Pressed: None"
    document.getElementById("key").innerHTML = "Key Pressed: None"

    document.getElementById("ele").innerHTML = "Elevation: CENTER"
    document.getElementById("pit").innerHTML = "Pitch: CENTER"



    if (event.keyCode == 83 || event.keyCode == 87) {
        console.log("elevationoff");
        firebase.database().ref("/").child("elevation").update({
            Elevation: 0
        });
    }
    if (event.keyCode == 65 || event.keyCode == 68) {
        console.log("pitchoff");
        firebase.database().ref("/").child("pitch").update({
            Pitch: 0
        });
    }


}
function stop() {
    firebase.database().ref("/").child("speed").update({
        Speed: 0
    });
    document.getElementById("spe").innerHTML = "Motor Speed: 0";
}
















