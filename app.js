let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById("amigo").value;

    if (amigoInput) {
        amigos.push(amigoInput);
        document.getElementById("amigo").value = "";
        exibirAmigos();
    } else {
        alert("Por favor, insira um nome.");
    }
}

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    let i = 0; 
    while (i < amigos.length) { 
        lista.innerHTML += "<li>" + amigos[i] + "</li>"; 
        i++; 
    }

}



function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];
    console.log(amigoSorteado);

    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}