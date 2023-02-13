//  step-1: add event listener to deposit item 
document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-2: get the deposit ammount from the input field
    const depositField = document.getElementById('deposit-field');

    //get the value of input field and convert to 
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3:get the current deposit total
    //note: for non-input tag use i.innerText not .value
    const depositTotalElement = document.getElementById('deposit-total');

    //converting the amount string to float
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //get the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // set the total to deposit section 
    depositTotalElement.innerText = currentDepositTotal;

    //step-4: get the total balance
    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the current balance 
    balanceTotalElement.innerText = currentBalanceTotal;


    // step-6: clear the deposit field 
    depositField.value = '';
})