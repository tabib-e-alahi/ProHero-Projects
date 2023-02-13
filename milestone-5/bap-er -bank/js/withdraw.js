document.getElementById('btn-withdraw').addEventListener('click', function () {

    // get the withdraw amount from input field 
    const withdrawField = document.getElementById('withdraw-field');

    //converting the amount string to float
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// clear the withdrawField field 
withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valide amount');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');

    //converting the amount string to float
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   

    //getting the new balance total after withdrawing
    const balanceTotalElement = document.getElementById('balance-total');




    //converting to float
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

 

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You have unsufficient balance');
        return;
    }
    else {
         // get the total amount 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

        const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText = currentBalanceTotal;
    }



   



})