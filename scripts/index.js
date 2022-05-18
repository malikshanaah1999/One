// initialize count variable
let count = 0;

// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el");

// grab the save-el element, store it in a saveEl variable
let saveEl = document.getElementById("save-el");

// initialize count variable
let tot = 0;

// grab the total-el element, store it in a totalEl variable
let totalEl = document.getElementById("total-el");

// FUNCTIONS
// increment h2 at every click on the button count-el
function increment() {
  count += 1;

  // IMPORTANT
  // textContent is better than innerText

  // set countEl's innerText to the count
  countEl.textContent = count;
}

// save previous people entered within the paragraph
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  // reset counter variable and HTML after saving
  countEl.textContent = 0;
  count = 0;
}

// save previous people entered in the tot variable BEFORE the reset (SEE HTML)
function total() {
  tot += count;

  // set totalEl's innerText to the tot
  totalEl.textContent = tot;
}
