let countdown;
let totalTime;

document.getElementById('start-button').addEventListener('click', function() {
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const secondsInput = document.getElementById('seconds-input');
    const timerText = document.getElementById('timer-text');
    const circleInner = document.querySelector('.circle-inner');
    const startButton = document.getElementById('start-button');
    const cancelButton = document.getElementById('cancel-button');

    if (startButton.disabled) {
        return;
    }

    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    totalTime = (hours * 3600) + (minutes * 60) + seconds;

    if (totalTime <= 0) {
        alert('Por favor, insira um tempo válido.');
        return;
    }

    startButton.disabled = true;
    cancelButton.disabled = false;
    updateTimerDisplay(totalTime);

    countdown = setInterval(function() {
        totalTime--;

        updateTimerDisplay(totalTime);

        const percentage = (totalTime / ((hours * 3600) + (minutes * 60) + seconds)) * 100;
        circleInner.style.clipPath = `inset(${100 - percentage}% 0% 0% 0%)`;

        
        if (totalTime <= 0) {
            clearInterval(countdown);
            timerText.textContent = "Tempo esgotado!";
            circleInner.style.clipPath = 'inset(0% 0% 0% 0%)';
            startButton.disabled = false;
            cancelButton.disabled = true;
        }
    }, 1000);
});

function updateTimerDisplay(time) {

    const hoursLeft = Math.floor(time / 3600);
    const minutesLeft = Math.floor((time % 3600) / 60);
    const secondsLeft = time % 60;
    const timerText = document.getElementById('timer-text');


    timerText.textContent = `${hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}:${
        minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:${
        secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;
}

document.getElementById('cancel-button').addEventListener('click', function() {
    clearInterval(countdown);
    const timerText = document.getElementById('timer-text');
    const startButton = document.getElementById('start-button');
    const cancelButton = document.getElementById('cancel-button');


    timerText.textContent = "00:00:00";
    startButton.disabled = false;
    cancelButton.disabled = true;
    document.getElementById('hours-input').value = 0;
    document.getElementById('minutes-input').value = 0;
    document.getElementById('seconds-input').value = 0;
});
