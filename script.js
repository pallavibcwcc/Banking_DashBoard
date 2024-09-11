//script.js file
const currVal = 1000;
let amount = (document.getElementById("amount").innerHTML = currVal);

amount.innerText = currVal;

//function for add value when deopsit button clicked by user
function deposit() {
  let DepositInp = document.getElementById("DepositIn").value;
  console.log(DepositInp, amount, "DepositIn");
  let DepositIn = Number(DepositInp) + amount;

  console.log(DepositIn, "amount");

  if (DepositInp <= 0 || amount == 0) {
    alert("No a Valid Number");
  } else {
    amount = document.getElementById("amount").innerHTML = DepositIn;
    let DepositInp = (document.getElementById("DepositIn").value = "");
  }
}
//function for deduct value from current balance when Withdrawal button is clicked
function Withdrawalamount() {
  let WithdrawalInp = document.getElementById("WithdrawalIn").value;
  console.log(WithdrawalInp, amount, "WithdrawalIn");
  let WithdrawalIn = Number(WithdrawalInp) - amount;

  console.log(WithdrawalIn, "amount");

  if (WithdrawalInp <= 0) {
    alert("Not a valid Number");
  }
  if (amount == 0) {
    alert("No change should occur to the balance");
  } else {
    amount = document.getElementById("amount").innerHTML = WithdrawalIn;

    let WithdrawalInp = (document.getElementById("WithdrawalIn").value = "");
  }
}
