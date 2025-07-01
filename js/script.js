console.log('Script carregado.')

const btnReveal = document.getElementById('btn-reveal');
const contactInfo = document.getElementById('contact-info');

btnReveal.addEventListener('click', () => {
    contactInfo.classList.toggle('visivel');

    const isVisible = contactInfo.classList.contains('visivel');

    if (isVisible) {
        btnReveal.textContent = 'Ocultar Contato';
    } else {
        btnReveal.textContent = 'Mostrar Contato'
    }

})