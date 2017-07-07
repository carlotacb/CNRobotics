function enregistra() {

    var y = document.getElementsByTagName('input');
    for (var i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            alert("El camp " + y[i].name + " es necessari");

            if (y[i].id == 'pass') {
                document.getElementById('pass').style.borderColor = "red";
                //return;
            }
            else if (y[i].id == 'pass2') {
                document.getElementById('pass2').style.borderColor = "red";
                //return;
            }
            else if (y[i].id == 'email') {
                document.getElementById('email').style.borderColor = "red";
                //return;
            }
            else if (y[i].id == 'username') {
                document.getElementById('username').style.borderColor = "red";
                document.getElementById('pass').value="";
                //return;
            }

        }
    }
    var x = document.getElementById("username");

    var y = document.getElementById("pass2");
    var z = document.getElementById("pass");
    if (y.value !== z.value) alert("Contrasenyes diferents");
    else {
        window.localStorage.setItem("password", z.value);
        window.localStorage.setItem("username", x.value);
    }
}

function cancel(){

    window.open('index.html');

}