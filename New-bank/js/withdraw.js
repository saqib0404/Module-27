document.getElementById('withdraw-btn').addEventListener('click', function(){
    // console.log(10);
    const withdrawAmount = getInputFieldValueById('withdraw-field');

    const withdarwTotal = getElementInnerTextById('Withdraw-total');
    const newWithdrawTotal = withdarwTotal + withdrawAmount;
    setElementInnerTextById('Withdraw-total', newWithdrawTotal);

    const balanceTotal = getElementInnerTextById('balance-total');
    const newBalanceTotal = balanceTotal - withdrawAmount;
    setElementInnerTextById('balance-total', newBalanceTotal);
})