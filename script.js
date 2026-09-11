const subjectInput = document.getElementById('subject-input');
const addBtn = document.getElementById('add-btn');
const subjectList = document.getElementById('subject-list');

// Add a new subject card when button is clicked
addBtn.addEventListener('click', function() {
  const subjectName = subjectInput.value.trim();
  
  if (subjectName === "") return; // Don't add empty items

  let streak = 0;

  // Create a new card box element
  const card = document.createElement('div');
  card.className = 'subject-card';

  card.innerHTML = `
    <div class="subject-info">
      <span class="subject-name">${subjectName}</span>
      <div class="subject-streak">Streak: <span class="count">0</span> Days 🔥</div>
    </div>
    <div class="action-btns">
      <button class="study-btn">+1 Day</button>
      <button class="delete-btn">✕</button>
    </div>
  `;

  // Attach "+1 Day" logic
  const streakCount = card.querySelector('.count');
  card.querySelector('.study-btn').addEventListener('click', function() {
    streak++;
    streakCount.innerText = streak;
  });

  // Attach Delete logic
  card.querySelector('.delete-btn').addEventListener('click', function() {
    card.remove();
  });

  // Add the newly created card into our list
  subjectList.appendChild(card);

  // Clear input field
  subjectInput.value = "";
});
