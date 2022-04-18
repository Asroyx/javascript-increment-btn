let count=0;
const saved=[]; // All varuables the saved in Array
let savedValues=""; // All varuables the saved as Array for showin at html
function increment() {
  count++;
  document.getElementById('count-el').innerText = count;
}

function save() {
  console.log(count);
  saved[saved.length] = count;

  savedValues += count+", ";

  document.getElementById('recent').innerText=savedValues;
}
