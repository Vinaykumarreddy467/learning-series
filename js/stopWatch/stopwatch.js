// Stopwatch functionality
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;
let isRunning = false;
let laps = [];

const timeDisplay = document.getElementById('timeDisplay');
const millisecondsDisplay = document.getElementById('millisecondsDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsList = document.getElementById('lapsList');

// Format time with leading zeros
function formatTime(value) {
    return String(value).padStart(2, '0');
}

// Update the display
function updateDisplay() {
    timeDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    millisecondsDisplay.textContent = `.${String(milliseconds).padStart(3, '0')}`;
}

// Start the stopwatch
function start() {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        lapBtn.disabled = false;

        timerInterval = setInterval(() => {
            milliseconds += 10;
            
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 10);
    }
}

// Stop the stopwatch
function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

// Record a lap
function recordLap() {
    if (isRunning) {
        const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${String(milliseconds).padStart(3, '0')}`;
        laps.push(lapTime);
        displayLaps();
    }
}

// Display laps
function displayLaps() {
    lapsList.innerHTML = '';

    if (laps.length === 0) {
        lapsList.innerHTML = '<p class="no-laps">No laps recorded</p>';
        return;
    }

    laps.forEach((lap, index) => {
        const lapItem = document.createElement('div');
        lapItem.className = 'lap-item';
        lapItem.innerHTML = `
            <span class="lap-number">Lap ${index + 1}</span>
            <span class="lap-time">${lap}</span>
        `;
        lapsList.appendChild(lapItem);
    });
}

// Reset the stopwatch
function reset() {
    isRunning = false;
    clearInterval(timerInterval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];
    
    updateDisplay();
    displayLaps();
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
}

// Event listeners
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
lapBtn.addEventListener('click', recordLap);
resetBtn.addEventListener('click', reset);

// Initialize display
updateDisplay();
