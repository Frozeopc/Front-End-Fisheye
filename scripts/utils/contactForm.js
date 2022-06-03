const inputFirstName = document.getElementById("prenom")
const inputLastName = document.getElementById("Nom")
const inputMail = document.getElementById("mail")
const inputMessage = document.getElementById("message")
const inputSubmit = document.getElementById("contact_button")


inputSubmit.addEventListener("click", function (event) {
    ;
    console.log(inputFirstName.value);
    console.log(inputLastName.value);
    console.log(inputMail.value);
    console.log(inputMessage.value);
    closeModal();
    event.preventDefault(); return false;
}, false);


function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

