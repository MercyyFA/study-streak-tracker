// 1. Store the starting streak count in memory
let streak = 0;

// 2. Select the elements on our webpage using their IDs
const streakDisplay = document.getElementById('streak-count');
const studyButton = document.getElementById('study-btn');
const resetButton = document.getElementById('reset-btn');

// 3. What happens when you click "I Studied Today!":
studyButton.addEventListener('click', function() {
  streak = streak + 1; // Add 1 to the current streak count
  streakDisplay.innerText = streak; // Update the webpage screen with the new number
});

// 4. What happens when you click "Reset Streak":
resetButton.addEventListener('click', function() {
  streak = 0; // Set streak back to 0
  streakDisplay.innerText = streak; // Update the webpage screen back to 0
});
