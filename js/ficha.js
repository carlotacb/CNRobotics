
function getData() {
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].name == "nom") {
            document.getElementById('n.nom').innerHTML  = inputs[i].value;
        }
        else if (inputs[i].name == "congnom") {
            document.getElementById('n.congnom').innerHTML  = inputs[i].value;
        }
        else if (inputs[i].name == "dni") {
            document.getElementById('n.dni').innerHTML  = inputs[i].value;
        }
        else if (inputs[i].name == "color") {
            document.getElementById('fild').style.backgroundColor = inputs[i].value;
        }
        else if (inputs[i].name == "data") {
            document.getElementById('n.data').innerHTML  = inputs[i].value;
        }
        else if (inputs[i].name == "direccio") {
            document.getElementById('n.direccio').innerHTML  = inputs[i].value;
        }
        inputs[i].value="";
    }

}


/*
*
 <p id="n.rang"></p>
 <p id="n.categoria"></p>

 *
* */