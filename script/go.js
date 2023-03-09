function go(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if( user == "Mauricio" && password == "1234"){
        window.location = "codigos/Usuario1.HTML";
    } 

    else if( user == "Yajairi" && password== "1234"){
        window.location = "codigos/Usuario2.HTML";
    } 

    else if( user == "Millely" && password == "1234"){
        window.location = "codigos/Usuario3.HTML";
    } else{
        alert("Datos Incorrectos")
    }
}