const meuFormulario = document.getElementById("meuFormulario");
const mensagemErro = document.getElementById("mensagemErro");
const mensagemSucesso = document.getElementById("mensagemSucesso");
const numeroA = document.getElementById("numeroA");
const numeroB = document.getElementById("numeroB");

numeroA.addEventListener("input", function () {
    if (numeroA.checkValidity()) {
        mensagemErro.style.display = "none";
}
});

numeroB.addEventListener("input", function () {
    const valorA = parseInt(numeroA.value);
    const valorB = parseInt(numeroB.value);
    if (valorB > valorA) {
        mensagemErro.style.display = "none";
}
});

meuFormulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); 

    const valorA = parseInt(numeroA.value);
    const valorB = parseInt(numeroB.value);

    if (valorB <= valorA) {
        mensagemErro.textContent = "O número B deve ser maior que o número A!";
        mensagemErro.style.display = "block";
} else if (meuFormulario.checkValidity()) {
    mensagemSucesso.style.display = "block";
    meuFormulario.reset();
}
});