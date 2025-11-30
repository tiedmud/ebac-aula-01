function calcularImc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let calculo = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

    document.getElementById("valor-calculado").textContent = "IMC calculado!";
    document.getElementById("imc").textContent = "Seu IMC é: " + Math.round(calculo);

    let form = document.getElementById("form");
    
    function handleForm(event) {
        event.preventDefault();
    }

    form.addEventListener('submit', handleForm);
}