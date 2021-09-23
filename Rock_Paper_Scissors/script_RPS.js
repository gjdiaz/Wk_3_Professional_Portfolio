var plyrContinue = confirm("Pres ok to get true response value. Press cancel to get false response value");
var userChoice = prompt("Enter your choice 'R', 'P', or 'S':").toUpperCase();

var validChoices = ["R", "P", "S"];

if (!validChoices.includes(userChoice)) {
  alert("Invalid choice");
}