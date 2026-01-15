window.addEventListener('DOMContentLoaded', () => {
    // আগের data গুলো ফিল করবে ইনপুটে
    const storedAccountNumber = localStorage.getItem('accountNumber');
    if (storedAccountNumber) {
        const input = document.getElementById('account-number');
        if (input) input.value = storedAccountNumber;
    }

    const storedPin = localStorage.getItem('pinNumber');
    if (storedPin) {
        const pinInput = document.getElementById('pin');
        if (pinInput) pinInput.value = storedPin;
    }
});


// Add Money Functionality
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumberInput = document.getElementById('account-number').value;
    const pinInput = document.getElementById('pin').value;

    const storedAccountNumber = localStorage.getItem('accountNumber');
    const storedPin = localStorage.getItem('pinNumber');

    if (accountNumberInput !== storedAccountNumber) {
        alert("Account Number does not match the logged-in user.");
        return;
    }

    if (pinInput !== storedPin) {
        alert("PIN does not match the logged-in user.");
        return;
    }


    const userAmount = getValueById("amount");
    const mainBalance = getInnerTextById("main-balance")

    if (isNaN(userAmount) || userAmount <= 0) {
        alert("Please enter a valid amount");
        document.getElementById('amount').value = "";
        return;
    }

    else {
        const totalAmount = userAmount + mainBalance;
        setElement("main-balance", totalAmount)
        document.getElementById('amount').value = "";
    }

});
