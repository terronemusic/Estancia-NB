// Este código vai no seu projeto do VS Code
async function enviarReserva() {
    const dados = {
        tipo: 'reserva',
        checkIn: document.getElementById('check-in').value,
        checkOut: document.getElementById('check-out').value,
        hospedes: document.getElementById('hospedes').value,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value
    };

    try {
        const response = await fetch('AKfycby2GzYMJkFYE3xYL9bICD6H6mhLpKovLUGvafkUDnCZ', {
            method: 'POST',
            body: JSON.stringify(dados)
        });

        const result = await response.json();
        if(result.success) {
            alert('Reserva enviada com sucesso!');
        }
    } catch (erro) {
        alert('Erro ao enviar reserva');
        console.error(erro);
    }
}