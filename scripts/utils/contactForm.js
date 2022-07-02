/* eslint-disable no-console */
export default class contactForm {
  static init = (photographer) => {
    this.modalName(photographer);
    this.displayModal();
    this.closeModal();
    this.validate();
  };

  static displayModal = () => {
    const modal = document.getElementById('contact-modal');
    const input = document.querySelector('form input');

    document.querySelector('.contact-button').addEventListener('click', () => {
      modal.style.display = 'block';
      input.focus();
    });
  };

  static closeModal = () => {
    const modal = document.getElementById('contact-modal');
    const form = document.querySelector('form');

    document.querySelector('#close-form-modal').addEventListener('click', () => {
      modal.style.display = 'none';
      form.reset();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      modal.style.display = 'none';
      form.reset();
    });
  };

  static validate = () => {
    const modal = document.getElementById('contact-modal');

    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = document.querySelector('form');
      const firstName = document.querySelector('#firstname');
      const surName = document.querySelector('#surname');
      const email = document.querySelector('#email');
      const message = document.querySelector('#message');

      console.log(`Firstname: ${firstName.value}, Surname: ${surName.value}`);
      console.log(`Email: ${email.value}, Message: ${message.value}`);

      modal.style.display = 'none';
      form.reset();
    });
  };

  static modalName = (photographer) => {
    const h2 = document.createElement('h2');
    const formName = document.querySelector('.modal header');

    h2.textContent += `Contactez-moi ${photographer[0].name}`;

    formName.insertAdjacentHTML('afterbegin', h2.outerHTML);
  };
}
