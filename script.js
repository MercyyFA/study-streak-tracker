const subjectInput = document.getElementById('subject-input');
const addBtn = document.getElementById('add-btn');
const subjectList = document.getElementById('subject-list');

addBtn.addEventListener('click', function() {
  const subjectName = subjectInput.value.trim();
  
  if (subjectName === "") return;

  let streak = 0;
  let seconds = 0;
  let timerInterval = null;

  const card = document.createElement('div');
  card.className = 'subject-card';

  card.innerHTML = `
    <div class="card-header">
      <div>
        <span class="subject-name">${subjectName}</span>
        <div class="subject-streak">Streak: <span class="count">0</span> Days 🔥</div>
      </div>
      <button class="delete-btn" title="Delete subject">✕</button>
    </div>
    
    <div class="timer-display">00:00:00</div>
    
    <div class="action-btns">
      <button class="start-btn">Start Study</button>
      <button class="stop-btn" disabled>Stop</button>
      <button class="streak-btn">+1 Day</button>
    </div>
  `;

  const streakCount = card.querySelector('.count');
  const timerDisplay = card.querySelector('.timer-display');
  const startBtn = card.querySelector('.start-btn');
  const stopBtn = card.querySelector('.stop-btn');
  const streakBtn = card.querySelector('.streak-btn');
  const deleteBtn = card.querySelector('.delete-btn');

  // Helper function to format seconds into HH:MM:SS
  function formatTime(totalSeconds) {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  }

  // 1. Start Timer Logic
  startBtn.addEventListener('click', function() {
    if (timerInterval !== null) return; // Prevent multiple timers running at once

    startBtn.disabled = true;
    stopBtn.disabled = false;
    startBtn.style.opacity = "0.5";
    stopBtn.style.opacity = "1";

    timerInterval = setInterval(function() {
      seconds++;
      timerDisplay.innerText = formatTime(seconds);
    }, 1000);
  });

  // 2. Stop Timer Logic
  stopBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null;

    startBtn.disabled = false;
    stopBtn.disabled = true;
    startBtn.style.opacity = "1";
    stopBtn.style.opacity = "0.5";
  });

  // 3. Streak Count Logic
  streakBtn.addEventListener('click', function() {
    streak++;
    streakCount.innerText = streak;
  });

  // 4. Delete Card Logic
  deleteBtn.addEventListener('click', function() {
    clearInterval(timerInterval); // Stop timer if card is removed
    card.remove();
  });

  subjectList.appendChild(card);
  subjectInput.value = "";
});
