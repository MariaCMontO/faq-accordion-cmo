//Variables
const containers = Array.from(document.querySelectorAll('.question-container'))
console.log(containers)
//Events
containers.forEach((container) => {
    container.addEventListener('click', (e) => {
        const answer = container.nextElementSibling;
        const plusButton = container.querySelector('.plus-button')
        const button = container.querySelector('.question')
        
        answer.classList.toggle('is-hidden')
        plusButton.src = answer.classList.contains('is-hidden') ? '/assets/images/icon-plus.svg' : '/assets/images/icon-minus.svg';
        button.setAttribute("aria-expanded", !answer.classList.contains('is-hidden'));
        console.log(button)
    });
})
