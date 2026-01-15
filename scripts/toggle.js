document.getElementById('deposit-section').style.display = "none";

document.getElementById('add-money').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = "block";
    document.getElementById('deposit-section').style.display = "none";
});

document.getElementById('cash-out').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = "none";
    document.getElementById('deposit-section').style.display = "block";
});