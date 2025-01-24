// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = ""; // Limpiamos la lista

   
    amigos.forEach(nombre => {
        lista.innerHTML += `<li>${nombre}</li>`;
    });
}

function agregarAmigo() {
    let entrada = document.getElementById("amigo");
    let nombre = entrada.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombre); 
        console.log(amigos); 
        entrada.value = ""; // Limpiamos el input
        actualizarLista(); 
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos para sortear");
    }

    let indice = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto sorteado es: ${amigoSorteado}</li>`;

}



