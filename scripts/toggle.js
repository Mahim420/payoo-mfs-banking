document.getElementById('deposit-section').style.display = "none";

document.getElementById('add-money').addEventListener('click', function () {
    toggleHandler("add-money-section", "block");
    toggleHandler("deposit-section", "none");
});

document.getElementById('cash-out').addEventListener('click', function () {
    toggleHandler("add-money-section", "none");
    toggleHandler("deposit-section", "block");
});


function toggleHandler(id, status) {
    document.getElementById(id).style.display = status;
}