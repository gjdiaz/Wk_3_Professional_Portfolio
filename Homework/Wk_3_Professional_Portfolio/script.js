
dvar horoscope = document.querySelector('.horoscope');

function getApi() {
    fetch("git ", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": "901cbaf60cmsh5e5bea7d5f1a8bap1edabajsn89697e7fb7b8"
        }
    })
    .then(response => {
	    console.log(response);
    })
    .catch(err => {
	    console.error(err);
});
}

var myModal = document.getElementById("modal");
// Set object for the button that will trigger the modal box
var myButton = document.getElementById("modalBtn");
// Allows display of modal box, when user clicks the button
myButton.onclick = function() {
myModal.style.display = "block";
}

$('#login-form').modal();