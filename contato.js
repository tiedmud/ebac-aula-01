function enviarEmail() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let celular = document.getElementById("celular").value;

    document.getElementById("mensagem-sucesso").textContent = "E-mail enviado com sucesso!";
}