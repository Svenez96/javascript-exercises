const $form = document.querySelector("form");
const $inputName = document.querySelector("#nome");
const $inputSurname = document.querySelector("#cognome");

$form.addEventListener("submit", (event) => {
    event.preventDefault();

    if($inputName.value === "" || $inputSurname.value === "") {
        alert("Tutti i campi devono essere compilati");
    } else {
        alert("Benvenuto utente!")
    }
});


