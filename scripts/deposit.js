document.getElementById('deposit-btn').addEventListener('click', function () {

    const agentNumberInput = document.getElementById('agent-number').value;
    const depositPinInput = document.getElementById('deposit-pin').value;

    const storedAccountNumber = localStorage.getItem('accountNumber');
    const storedPin = localStorage.getItem('pinNumber');

    if (agentNumberInput !== storedAccountNumber) {
        alert("Agent number does not match the logged-in user.");
        return;
    }

    if (depositPinInput !== storedPin) {
        alert("PIN does not match the logged-in user.");
        return;
    }

    const depositAmount = getValueById("deposit-amount");
    const mainBalance = getInnerTextById("main-balance");

    if (mainBalance >= depositAmount) {
        const totalBalance = mainBalance - depositAmount;
        setElement("main-balance", totalBalance)
        document.getElementById('deposit-amount').value = "";
    }
    else {
        alert("Your Balance Is low Check Your main Balance");
        document.getElementById('deposit-amount').value = "";
    }

});
