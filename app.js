// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo(){
    let entrada = document.getElementById("amigo");
    let nombre = entrada.value.trim();

    if(nombre === ""){
        alert("Por favor, inserte un nombre");
    }else{
        nombres.push(nombre);
        console.log(nombres);
        entrada.value = ""; //Se limpia el placeholder
    }
}
