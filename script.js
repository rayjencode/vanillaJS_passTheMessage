const form = document.getElementById('form-submit');
const input = document.getElementById('form-input');
const feedback = document.querySelector('.feedback');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (input.value === '') {
        feedback.style.display = 'block';
        setTimeout(function () {
            feedback.style.display = 'none';
        }, 3000);
    }

    message.innerHTML = input.value;
    input.value = '';
});
