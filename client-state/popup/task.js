const modalClose = document.querySelector('.modal__close');
const subscribeModal = document.getElementById('subscribe-modal');

function getCookie(name) {
    const split = document.cookie.split('; ');
    return split.includes(name);
}

modalClose.addEventListener('click', function() {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'flag=1';
});

if (!getCookie('flag=1')) {
    subscribeModal.classList.add('modal_active');
}