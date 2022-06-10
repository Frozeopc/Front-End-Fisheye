const inputFirstName = document.getElementById("prenom")
const inputLastName = document.getElementById("nom")
const inputMail = document.getElementById("mail")
const inputMessage = document.getElementById("message")
const inputSubmit = document.getElementById("contact_button")

// soumission du formulaire et affichage console des champs
inputSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(inputFirstName.value);
    console.log(inputLastName.value);
    console.log(inputMail.value);
    console.log(inputMessage.value);
    closeModal();

}, false);

// affichage du formulaire contact
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

// fermeture du formulaire contact
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

