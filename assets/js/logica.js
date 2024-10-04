document.getElementById('formularioVuelos').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    const origen = document.getElementById('origen').value.trim();
    const destino = document.getElementById('destino').value.trim();
    const resultElement = document.getElementById('resultado');
    
    const vueloConEscala = {
        "Bogota": "Santiago",
        "Boston": "Paris"
    };

    if (vueloConEscala[origen] === destino) {
        resultElement.textContent = "¡Ojo! Tu vuelo tiene una escala";
        resultElement.style.color = "red";
    } else {
        resultElement.textContent = "Tu vuelo es directo.";
        resultElement.style.color = "green";
    }
});
