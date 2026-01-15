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


    const userAmount = document.getElementById('amount').value;
    const mainBalance = document.getElementById('main-balance').innerText;

    const convertedUserAmount = parseFloat(userAmount);
    const convertedMainBalance = parseFloat(mainBalance);

    const totalAmount = convertedMainBalance + convertedUserAmount;
    alert("Are you sure want to add ?");

    document.getElementById('main-balance').innerText = totalAmount;

    document.getElementById('amount').value = "";

});


// Logout button 

document.getElementById('logout-btn').addEventListener('click', function () {

    localStorage.clear();
    window.location.href = './index.html';
})
