var bool;
function localstg() {
    var y = document.getElementsByTagName('input');
    for (var i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            alert("El camp " + y[i].name + " es necessari");

            if (y[i].id == 'pass') {
                document.getElementById('pass').style.borderColor = "red";
                //return;
            }

            else if (y[i].id == 'username') {
                document.getElementById('username').style.borderColor = "red";
                document.getElementById('pass').value="";
                //return;
            }

        }
    }
    var a = document.getElementById("username");
    var b = window.localStorage.getItem("username");
    var c = document.getElementById("pass");
    var d = window.localStorage.getItem("password");
    if ((a.value == b) && (c.value == d)) {
        bool = true;
    } else bool = false;
    if (bool == true) window.open("home.html", '_blank');
    else  alert("Usuari o contrasenya no vàlids.");
}


function myregister(){
    window.open('registre.html', '_blank');
}
