// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling; // get the associated answer
        answer.classList.toggle('active'); // toggle the active class

        // Optional: Close other answers when opening a new one
        faqQuestions.forEach(otherBtn => {
            if (otherBtn !== button) {
                otherBtn.nextElementSibling.classList.remove('active');
            }
        });
    });
});



