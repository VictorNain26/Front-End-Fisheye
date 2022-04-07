const modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function validate() {
    event.preventDefault();
    const form = document.querySelector("form");
    const firstName = document.querySelector("#firstname");
    const surName = document.querySelector("#surname");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    console.log(`Firstname: ${firstName.value}, Surname: ${surName.value}`);
    console.log(`Email: ${email.value}, Message: ${message.value}`);

    modal.style.display = "none";
    form.reset();
}
