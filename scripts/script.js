// ==============================
// Part 1: Basics - Variables, Conditionals
// ==============================
function checkNumber() {
  let num = prompt("Enter a number:");
  let output = "";

  if (num > 0) {
    output = `✅ ${num} is positive`;
  } else if (num < 0) {
    output = `❌ ${num} is negative`;
  } else {
    output = "⚪ The number is zero";
  }

  document.getElementById("basic-output").textContent = output;
}

// ==============================
// Part 2: Functions - Reusable Logic
// ==============================
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(50, 3); // Example values
  document.getElementById("function-output").textContent = 
    `💰 The total is $${total}`;
}

// ==============================
// Part 3: Loops - Repetition
// ==============================
function generateList() {
  let items = ["Apple 🍎", "Banana 🍌", "Cherry 🍒"];
  let listContainer = document.getElementById("loop-list");
  listContainer.innerHTML = ""; // clear existing

  // Using for loop
  for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.textContent = items[i];
    listContainer.appendChild(li);
  }

  // Using while loop (adds countdown)
  let countdown = 3;
  while (countdown > 0) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${countdown}`;
    listContainer.appendChild(li);
    countdown--;
  }
}

// ==============================
// Part 4: DOM - Interactions
// ==============================

// Change text on click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("dom-text").textContent = "🎉 Text has been changed!";
});

// Toggle class highlight
document.getElementById("toggleClassBtn").addEventListener("click", function() {
  document.getElementById("dom-text").classList.toggle("highlight");
});

// Create new element dynamically
document.getElementById("createElementBtn").addEventListener("click", function() {
  let newPara = document.createElement("p");
  newPara.textContent = "✨ A new element has been added!";
  document.getElementById("dom-container").appendChild(newPara);
});
