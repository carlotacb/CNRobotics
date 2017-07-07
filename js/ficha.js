
function getData() {
    var inputs = document.getElementsByTagName('input');
    var dni = 0;
    var y = 0;

    var x =  document.getElementById("lloctre");
    document.getElementById('n_categoria').innerHTML = "Categoria: " + x.value;
    x.value = "";

    document.getElementById('titol').innerHTML = "FICHA TÉCNICA";

    for (var i = 0; i < (inputs.length); i++) {
        if (inputs[i].name == "nom") {
            document.getElementById('n_nom').innerHTML  = "Nom: " + inputs[i].value;
            inputs[i].value="";
        }
        else if (inputs[i].name == "congnom") {
            document.getElementById('n_congnom').innerHTML  = "Congnoms: " + inputs[i].value;
            inputs[i].value="";
        }
        else if (inputs[i].name == "dni") {
            dni = inputs[i].value;
            inputs[i].value="";
        }
        else if(inputs[i].name == "lletra"){
            if (nif(dni, inputs[i].value)) {
                document.getElementById('n_dni').innerHTML  = "DNI: " + dni + inputs[i].value;
                y = 0;
            }
            else {
                document.getElementById('n_dni').innerHTML  = "DNI ERRONI: " + dni + inputs[i].value;
                document.getElementById('n_dni').style.color  = "red";
                y = 1;
            }
            inputs[i].value="";
        }
        else if (inputs[i].name == "color") {
            document.getElementById('fild').style.backgroundColor = inputs[i].value;
            inputs[i].value="ffff";
        }
        else if (inputs[i].name == "color2") {
            document.getElementById('fild').style.color = inputs[i].value;
            if (y === 0) document.getElementById('n_dni').style.color  = inputs[i].value;
            inputs[i].value="ffff";
        }
        else if (inputs[i].name == "data") {
            document.getElementById('n_data').innerHTML  = "Data de naixement: " + inputs[i].value;
            inputs[i].value="";
        }
        else if (inputs[i].name == "direccio") {
            document.getElementById('n_direccio').innerHTML  = "Direcció: " + inputs[i].value;
            inputs[i].value="";
        }

        else if (inputs[i].name == "range") {
            document.getElementById('n_sat').innerHTML  = "Nivell de satisfacció: " + inputs[i].value;
        }

        /*else if (inputs[i].name == "file") {

            document.getElementById('n_img').src = inputs[i].value;
            console.log('hola');
        }*/
    }
}

function nif(dni, letra) {

    var numero = dni;
    var letr = letra;
    numero = numero % 23;
    letra='TRWAGMYFPDXBNJZSQVHLCKET';
    letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
        alert('La lletra del DNI no correspon al numero');
        return false;
    }
    return true;
}
