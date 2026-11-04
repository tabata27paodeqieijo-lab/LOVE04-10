
let corretas = {
    1: "Escola",
    2: "Planos impossíveis",
    3: "morder a língua",
    4: "perfeitinho(a)"
};

let pontuacao = 0;
let respondidas = [];

function responder(pergunta, resposta) {

    let resultado = document.getElementById("resultado");
    let declaracao = document.getElementById("declaracao");

    // Evita contar a mesma pergunta mais de uma vez
    if (respondidas.includes(pergunta)) {
        resultado.innerHTML = "você já respondeu essa bobão";
        return;
    }

    resultado.style.display = "block";

    if (resposta.toLowerCase() === corretas[pergunta].toLowerCase()) {

        pontuacao++;
        respondidas.push(pergunta);

        resultado.innerHTML = "ACERTOOOUU, mas não fez mais que a obrigação";
        resultado.style.backgroundColor = "#d8f5df";
        resultado.style.color = "#26733b";

    } else {

        respondidas.push(pergunta);

        resultado.innerHTML = "errou trouxaaa, tenta de novo ou aceita que vai ficar sem o J (se vc errou, vai ficar sem ele do mesmo jeito)";
        resultado.style.backgroundColor = "#ffe0e6";
        resultado.style.color = "#c42d58";
    }

    if (respondidas.length === 4) {

        declaracao.innerHTML =
            "Você acertou " + pontuacao + "/4 perguntas! ❤️" +
            "<br><br>oarabéns bb! Mesmo se tivesse errado tudo, eu ainda escolheria você!!! Te amo!";

    }

}
