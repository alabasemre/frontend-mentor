let point = 0;
let prevRadio = null;

const step1 = document.querySelector('.rating-card-step-1');
const step2 = document.querySelector('.rating-card-step-2');

const radioInputs = document.querySelectorAll('.rating-card-radio-group');
const ratingSubmit = document.querySelector('.rating-card-btn');
const pointSpan = document.getElementById('rating-card-point-span');

ratingSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (point === 0) {
        alert('Please rate us before submit :)');
        return;
    }

    step1.style.display = 'none';
    step2.style.display = 'flex';

    pointSpan.innerHTML = point;
});

radioInputs.forEach((radio) => {
    radio.addEventListener('click', (e) => {
        if (prevRadio) {
            prevRadio.classList.remove('active');
        }

        e.target.classList.add('active');
        prevRadio = radio;
        point = Number(e.target.dataset.score);
    });
});
