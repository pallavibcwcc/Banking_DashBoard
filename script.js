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
    alert("Please! Enter  Positive Number Only");
  } else {
    amount = document.getElementById("amount").innerHTML = DepositIn;
    let DepositInp = (document.getElementById("DepositIn").value = "");
  }
}
//function for deduct value from current balance when Withdrawal button is clicked
function Withdrawalamount() {
  let WithdrawalInp = document.getElementById("WithdrawalIn").value;
  console.log(WithdrawalInp, amount, "WithdrawalIn");
  let WithdrawalIn = amount - Number(WithdrawalInp);

  console.log(WithdrawalIn, "amount");

  if (WithdrawalInp <=0) {
    alert(" Please Enter Positive Number only");
  }
   if(WithdrawalInp>amount){
    alert("Insufficient Balance!");
    let WithdrawalInp = (document.getElementById("WithdrawalIn").value = "");
  }
  else {
    amount = document.getElementById("amount").innerHTML = WithdrawalIn;

    let WithdrawalInp = (document.getElementById("WithdrawalIn").value = "");
  }
 }
