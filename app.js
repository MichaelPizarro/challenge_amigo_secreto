// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function actualizarLista() {
    let lista = document.getElementById("resultado");

    lista.innerHTML = ""; // Limpiamos la lista

   
    nombres.forEach(nombre => {
        lista.innerHTML += `<li>${nombre}</li>`;
    });
}

function agregarAmigo() {
    let entrada = document.getElementById("amigo");
    let nombre = entrada.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
    } else {
        nombres.push(nombre); 
        console.log(nombres); 
        entrada.value = ""; // Limpiamos el input
        actualizarLista(); 
    }
}



