const buttons = document.querySelectorAll('.toggle');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.closest('.question').nextElementSibling;
        const icon = button.querySelector('.icon');
        if (answer.classList.toggle('open')){
            icon.src = "./assets/images/icon-minus.svg";
            icon.alt = "-"
        }else{
            icon.src = "./assets/images/icon-plus.svg";
            icon.alt = "+"
        }
        
    });
});