function criarPassword() {

    const caracteres = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        1, 2, 3, 4, 5, 6, 7, 8, 9, "@", "!", "?", "<", ">", "*", "/", "+"
    ];
    const specialCaracters = ["@", "!", "?", "<", ">", "*", "/", "+"]
    let passwordGenerated = []
    for (let index = 0; index < 12; ++index) {
        let numeroAleatorio = Math.floor(Math.random() * caracteres.length);
        let caracterAleatorio = caracteres[numeroAleatorio];
        if (index === 0 || index == 8) {
            if (isNaN(caracterAleatorio) && !specialCaracters.includes(caracterAleatorio)) {
                const capitalCaracter = caracterAleatorio.toUpperCase();
                passwordGenerated.push(capitalCaracter);
                continue;
            } else {
                --index
                continue;
            }
        } else if (index == 2 || index == 7) {
            if (!specialCaracters.includes(caracterAleatorio)) { // Se nao tiver caracter especial incluido, diminua o index e false 
                --index
                continue;
            }
        } else if (index == 1 || index === 3 || index === 4 || index === 5 || index === 6) {
            if (!isNaN(caracterAleatorio) && !specialCaracters.includes(caracterAleatorio)) {//Se for um numero ou caracter especial, diminua o index e false, caso seja string, serà empurrado no vetor
                --index;
                continue;
            }
        } else if (index == 10 || index === 11) {
            if (isNaN(caracterAleatorio)) { //Se for uma letra, diminua o index e false,  caso seja numero, serà empurrado no vetor
                --index
                continue;
            }
        }
        passwordGenerated.push(caracterAleatorio)


    }

    return passwordGenerated
}

//Parte dinamica do DOM, ou seja, Botoes, labels, ecc...


let buttonGerarSenha = document.getElementById("button-gerar-senha")
let textoColar = document.getElementById("password-space")
buttonGerarSenha.addEventListener("click", function () {
    let passwordCriada = criarPassword().join("")
    textoColar.textContent = passwordCriada
});

let buttonCopiarSenha = document.getElementById("button-copiar-senha")
buttonCopiarSenha.addEventListener("click", function () {
    const text = textoColar.textContent
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied!"))
})