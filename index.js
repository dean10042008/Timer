const timeElement = document.querySelector('p');
const [pauseButton, startButton, resetButton] = document.querySelectorAll('button');
const [sessionsEl, totalEl, avgEl] = document.querySelectorAll('article div p');

pauseButton.style.visibility = 'hidden';
pauseButton.style.position = 'absolute';

let seconds = 0;
let sessions = 0;
let totalSeconds = 0;
let isStopped = true;

timeElement.textContent = new Date(seconds * 1000).toISOString().slice(11, 19);
totalEl.textContent = new Date(totalSeconds * 1000).toISOString().slice(14, 19);
sessionsEl.textContent = sessions;
avgEl.textContent = new Date((totalSeconds / (sessions || 1)) * 1000).toISOString().slice(14, 22);

pauseButton.addEventListener('click', (e) => {
    e.stopPropagation();
    isStopped = true;
    pauseButton.style.visibility = 'hidden';
    pauseButton.style.position = 'absolute';
    startButton.style.visibility = 'visible';
    startButton.style.position = 'static';
});

startButton.addEventListener('click', (e) => {
    e.stopPropagation();
    isStopped = false;
    pauseButton.style.visibility = 'visible';
    pauseButton.style.position = 'static';
    startButton.style.visibility = 'hidden';
    startButton.style.position = 'absolute';
});

resetButton.addEventListener('click', () => {
    sessions++;
    seconds = 0;
    timeElement.textContent = new Date(seconds * 1000).toISOString().slice(11, 19);
    avgEl.textContent = new Date((totalSeconds / sessions) * 1000).toISOString().slice(14, 22);
    sessionsEl.textContent =  sessions;
    isStopped = true;
    pauseButton.style.visibility = 'hidden';
    pauseButton.style.position = 'absolute';
    startButton.style.visibility = 'visible';
    startButton.style.position = 'static';
});

setInterval(() => {
    if (isStopped) return;
    seconds += 1;
    totalSeconds += 1;

    timeElement.textContent = new Date(seconds * 1000).toISOString().slice(11, 19);
    totalEl.textContent = new Date(totalSeconds * 1000).toISOString().slice(14, 19);
}, 1000);