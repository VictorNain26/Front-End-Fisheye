export default class contactForm {
	constructor() {};

	static init = (photographer) => {
		const modal = document.getElementById("contact_modal");

		this.modalName(photographer);
		this.displayModal(modal);
		this.closeModal(modal);
		this.validate(modal);
	}

	static displayModal = (modal) => {
		document.querySelector('.contact_button').addEventListener('click', () => {
			modal.style.display = "block";
		})
	}

	static closeModal = (modal) => {
		document.querySelector('#close-form-modal').addEventListener('click', () => {
			modal.style.display = "none";
		})
	}

	static validate = (modal) => {
		document.querySelector('form').addEventListener('submit', (e) => {
			e.preventDefault();
			const form = document.querySelector("form");
			const firstName = document.querySelector("#firstname");
			const surName = document.querySelector("#surname");
			const email = document.querySelector("#email");
			const message = document.querySelector("#message");

			console.log(`Firstname: ${firstName.value}, Surname: ${surName.value}`);
			console.log(`Email: ${email.value}, Message: ${message.value}`);

			modal.style.display = "none";
			form.reset();
		})
	}

	static modalName = (photographer) => {
		const formName = document.querySelector('.modal h2');

		formName.textContent += `Contactez-moi ${photographer.name}`;
	}
}
