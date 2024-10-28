let countdown; // Variável para armazenar o intervalo do temporizador
let totalTime; // Armazena o tempo total em segundos

document.getElementById('start-button').addEventListener('click', function() {
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const timerText = document.getElementById('timer-text');
    const circleInner = document.querySelector('.circle-inner');
    const startButton = document.getElementById('start-button');
    const cancelButton = document.getElementById('cancel-button');

    // Verifica se o temporizador já está em execução
    if (startButton.disabled) {
        return; // Se já estiver desabilitado, não faz nada
    }

    let hours = parseInt(hoursInput.value) || 0; // Lê horas
    let minutes = parseInt(minutesInput.value) || 0; // Lê minutos

    // Converte horas e minutos em segundos
    totalTime = (hours * 3600) + (minutes * 60);

    // Verifica se o tempo é válido
    if (totalTime <= 0) {
        alert('Por favor, insira um tempo válido.');
        return;
    }

    // Desabilita o botão de iniciar e habilita o botão de cancelar
    startButton.disabled = true;
    cancelButton.disabled = false; // Habilita o botão de cancelar
    updateTimerDisplay(totalTime); // Atualiza a exibição inicial do temporizador

    // Inicia a contagem regressiva
    countdown = setInterval(function() {
        totalTime--;

        // Atualiza o display do temporizador
        updateTimerDisplay(totalTime);

        // Calcula a fração do tempo restante
        const percentage = (totalTime / ((hours * 3600) + (minutes * 60))) * 100;
        circleInner.style.clipPath = `inset(${100 - percentage}% 0% 0% 0%)`; // Atualiza a parte visível da barra circular

        // Verifica se o tempo acabou
        if (totalTime <= 0) {
            clearInterval(countdown);
            timerText.textContent = "Tempo esgotado!";
            circleInner.style.clipPath = 'inset(0% 0% 0% 0%)'; // Reseta a barra de progresso
            startButton.disabled = false; // Reabilita o botão quando o tempo acaba
            cancelButton.disabled = true; // Desabilita o botão de cancelar
        }
    }, 1000);
});

// Função para atualizar a exibição do temporizador
function updateTimerDisplay(time) {
    const minutesLeft = Math.floor(time / 60);
    const secondsLeft = time % 60;
    const timerText = document.getElementById('timer-text');
    timerText.textContent = `${minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;
}

// Função para cancelar o temporizador
document.getElementById('cancel-button').addEventListener('click', function() {
    clearInterval(countdown); // Para o temporizador
    const timerText = document.getElementById('timer-text');
    const startButton = document.getElementById('start-button');
    const cancelButton = document.getElementById('cancel-button');

    timerText.textContent = "00:00"; // Reseta o texto do temporizador
    startButton.disabled = false; // Reabilita o botão de iniciar
    cancelButton.disabled = true; // Desabilita o botão de cancelar
    document.getElementById('hours-input').value = 0; // Reseta o campo de horas
    document.getElementById('minutes-input').value = 1; // Reseta o campo de minutos
});
