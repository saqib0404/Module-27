document.getElementById("deposit-btn").addEventListener('click', function () {
    const depositAmount = getInputFieldValueById('deposit-field');

    const depositTotal = getElementInnerTextById('deposit-total');
    const newDepositTotal = depositTotal + depositAmount;
    setElementInnerTextById('deposit-total', newDepositTotal);

    const balanceTotal = getElementInnerTextById('balance-total');
    const newBalanceTotal = balanceTotal + depositAmount;
    setElementInnerTextById("balance-total" , newBalanceTotal);
})