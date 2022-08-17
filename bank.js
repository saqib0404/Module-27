// Deposition---------------->
document.getElementById('deposit-btn').addEventListener('click', function(){
    // Step-2:
    const depositFieldElement = document.getElementById('deposit-field');
    const depositFieldStr = depositFieldElement.value;
    const depositField = parseFloat(depositFieldStr);

    // Step-3:
    depositFieldElement.value = '';

    // Step-4:
    const deposiTotalElement = document.getElementById('deposit-total');
    const depositTotalStr = deposiTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalStr);
    
    // Step-5:
    const newDeposit = depositField + depositTotal;
    deposiTotalElement.innerText = newDeposit;
    
    // Step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalStr = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalStr);

    // Step-7:
    const newBalanceTotal = balanceTotal + depositField;
    balanceTotalElement.innerText = newBalanceTotal;
})


// Withdraw--------------->
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // Step-2:
    const withdrawAmountElement = document.getElementById('withdraw-field');
    const withdrawAmountStr = withdrawAmountElement.value;
    const withdrawAmount = parseFloat(withdrawAmountStr);
    // console.log(withdrawAmount);
    
    // Step-3:
    withdrawAmountElement.value = '';

    // Step-4:
    const withdrawTotalElement = document.getElementById('Withdraw-total');
    const withdrawTotalStr = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalStr);

    // Step-5:
    const newWithdrawTotal = withdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // Step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalStr = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalStr);

    // Step-7:
    const newBalanceTotal = balanceTotal - withdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})