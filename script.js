function verificarIdade() {
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");

    if (idade >= 18) {
        resultado.textContent = "Acesso Permitido";
        resultado.className = "permitido";
    } else {
        resultado.textContent = "Acesso Negado";
        resultado.className = "negado";
    }
}