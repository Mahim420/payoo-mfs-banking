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

    const depositAmount = document.getElementById('deposit-amount').value;
    const convertedDepositAmount = parseFloat(depositAmount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const totalAmount = convertedMainBalance - convertedDepositAmount;

    if (totalAmount < 0) {
        alert("Balance is Too low");
    }
    else {
        alert("Are you sure to Deposit ??");
        document.getElementById('main-balance').innerText = totalAmount;
    }

    document.getElementById('deposit-amount').value = "";
});
