// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//crear función agregar amigo

let listaAmigos = [];

function agregarAmigo(nombre){
    const amigoInput = document.getElementById("amigo");
    //console.log(amigoInput.value);
    //validar que sea string, sin numeros, sin caracteres especiales excepto acentos
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(amigoInput.value)) {
            listaAmigos.push(amigoInput.value);
    }
    else{
        alert("El nombre debe ser una cadena de texto sin números ni caracteres especiales, excepto acentos.");
        return;
    }
    const listaAmigosUl = document.getElementById("listaAmigos");
    listaAmigosUl.innerHTML += `<li>${amigoInput.value}</li>`;
}


function sortearAmigo() {
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = "";
    let indiceSelecionado = -1;
    const largoLista = listaAmigos.length;
    if (largoLista < 2) {
        alert("Debe haber al menos 2 amigos para sortear");
        return;
    }
    indiceSelecionado = Math.floor(Math.random() * largoLista);
    //resultadoUl.innerHTML += `<li>El amigo secreto es: ${listaAmigos[indiceSelecionado]}</li>`;
    resultadoUl.textContent = `El amigo secreto es: ${listaAmigos[indiceSelecionado]}`;
    listaAmigos=[]
    const listaAmigosUl = document.getElementById("listaAmigos");
    listaAmigosUl.innerHTML = `${listaAmigos}`;
}