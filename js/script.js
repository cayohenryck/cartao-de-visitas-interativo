console.log('Script carregado.')

const btnReveal = document.getElementById('btn-reveal');
const contactInfo = document.getElementById('contact-info');

btnReveal.addEventListener('click', () => {
    contactInfo.style.display = 'block';

    btnReveal.textContent = 'Ocultar contato';
})