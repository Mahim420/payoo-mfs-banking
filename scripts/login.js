document.getElementById('login-btn').addEventListener('click', function (event) {

    event.preventDefault()

    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin').value;

    if (accountNumber.length === 6) {
        if (pinNumber === "1234") {
            window.location.href = "./main.html"
        }
        else {
            alert("wrong pin")
        }
    }
    else {
        alert("need valid number")
    }

})