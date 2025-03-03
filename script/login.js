document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;

    const Pin = document.getElementById("pin").value;
    const convertedPin = parseInt(Pin);
    if (accountNumber.length === 11) {
      if (convertedPin === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("incorrect pin");
      }
    } else {
      alert("incorrect number");
    }
  });
