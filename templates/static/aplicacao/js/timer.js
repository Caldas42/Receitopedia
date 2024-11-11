let countdown;
let totalTime;
let initialTime;
let isPaused = true;

const startButton = document.getElementById('start-button');
const cancelButton = document.getElementById('cancel-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const timerText = document.getElementById('timer-text');
const progressBarInner = document.querySelector('.progress-bar-inner');

startButton.addEventListener('click', function() {
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const secondsInput = document.getElementById('seconds-input');

    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    totalTime = (hours * 3600) + (minutes * 60) + seconds;
    initialTime = totalTime;

    if (totalTime <= 0) {
        alert('Por favor, insira um tempo válido.');
        return;
    }

    startButton.disabled = true;
    cancelButton.disabled = false;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    isPaused = false;
    pauseButton.textContent = "Pausar";
    updateTimerDisplay(totalTime);

    startCountdown();
});

function startCountdown() {
    countdown = setInterval(function() {
        if (!isPaused && totalTime > 0) {
            totalTime--;
            updateTimerDisplay(totalTime);

            const percentage = (totalTime / initialTime) * 100;
            progressBarInner.style.width = `${percentage}%`;

            if (totalTime <= 0) {
                clearInterval(countdown);
                timerText.textContent = "Tempo esgotado!";
                progressBarInner.style.width = '0%';
                resetButtons();
            }
        }
    }, 1000);
}

function updateTimerDisplay(time) {
    const hoursLeft = Math.floor(time / 3600);
    const minutesLeft = Math.floor((time % 3600) / 60);
    const secondsLeft = time % 60;

    timerText.textContent = `${hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}:${
        minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:${
        secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;
}

pauseButton.addEventListener('click', function() {
    if (totalTime > 0) {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? "Retomar" : "Pausar";
    }
});

cancelButton.addEventListener('click', function() {
    clearInterval(countdown);
    resetDisplay();
});

resetButton.addEventListener('click', function() {
    clearInterval(countdown);
    totalTime = initialTime;
    updateTimerDisplay(totalTime);
    progressBarInner.style.width = '100%';
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    cancelButton.disabled = true;
});

function resetDisplay() {
    timerText.textContent = "00:00:00";
    startButton.disabled = false;
    cancelButton.disabled = true;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    document.getElementById('hours-input').value = 0;
    document.getElementById('minutes-input').value = 0;
    document.getElementById('seconds-input').value = 0;
    progressBarInner.style.width = '0%';
    isPaused = false;
    pauseButton.textContent = "Pausar";
}

function resetButtons() {
    startButton.disabled = false;
    cancelButton.disabled = true;
    pauseButton.disabled = true;
    resetButton.disabled = true;
}
