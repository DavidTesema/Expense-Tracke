// Variables from HTML
let balance = document.querySelector("#balance");
let income = document.querySelector("#money-plus");
let expense = document.querySelector("#money-minus");
let listAddContainer = document.querySelector("#list");
let btn = document.querySelector(".btn");
let inputText = document.querySelector("#text");
let inputNumber = document.querySelector("#amount");
// prompt
let promptPrice = prompt("Listen to a certain amount for weekly expenses");
// append prompt to the balance
balance.innerHTML = `${Number(promptPrice)}$`;
// function show Data
function showData() {
  // my inputs
  let spending = inputText.value;
  let quantity = inputNumber.value;
  // append Variables to HTML
  listAddContainer.innerHTML += `
  <li class="minus">
  <p>${spending}</p>
   <p><span class="num">${quantity}</span></p>
   <button class="delete-btn">x</button>
  </li>
  `;
  updatePrice();
  // Array remove btn
  let removeBtn = document.querySelectorAll(".delete-btn");
  console.log(removeBtn);
  let deleteBtn = Array.from(removeBtn);
  deleteBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.target.parentElement.remove();
      updatePrice();
    });
  });
}
// function update Price
function updatePrice() {
  // empty Array
  let emptyArray = [];
  let num = document.querySelectorAll(".num");
  let sumArray = Array.from(num);
  sumArray.forEach(function (number) {
    emptyArray.push(+number.innerHTML);
  });
  console.log(emptyArray);
  // reduce function
  let sumNumber = emptyArray.reduce(function (zero, value) {
    return zero + value;
  }, 0);
  expense.innerHTML = `-${sumNumber}$`;
  income.innerText = `+ ${promptPrice - sumNumber} $`;
}
// event Btn
btn.addEventListener("click", (e) => {
  e.preventDefault();
  showData();
});