// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Se inicia declarando una variable tipo array que almacenera los nombre de los amigos ingresados.
let amigos = [];

// se crea funcion para ingresar el nombre del amigo
function agregar_amigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();


    if (nombre === "") {
        alert("Por favor ingresa un nombre");
        return;
    }

    if (amigos.includes(nombre)){
        alert("Este nombre ya fue agregado");
        return;
    }

    amigos.push(nombre);
    actualizar_lista_amigos();
    input.value = "";
    document.getElementById("resultado").innerHTML = ""; 
}

// se crea funcion para actualizar la lista de los amigos
function actualizar_lista_amigos(){
    let lista = document.getElementById("lista_amigos");
    lista.innerHTML = "";

        amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// se crea funcion para realizar el sorteo de amigos
function sortear_amigo(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length < 2){
        alert("agrega al menos dos amigos para realizar el sorteo");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigo_secreto = amigos[indice];

    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigo_secreto}`;
    resultado.appendChild(li);
}