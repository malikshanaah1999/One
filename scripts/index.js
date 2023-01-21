
let count = 0;


let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");


let tot = 0;

let totalEl = document.getElementById("total-el");

function increment() {
  count += 1;


  countEl.textContent = count;
}


function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;


  countEl.textContent = 0;
  count = 0;
}


function total() {
  tot += count;


  totalEl.textContent = tot;
}
