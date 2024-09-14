const questions = document.querySelectorAll('.faq-item');
const buttonImg = item.querySelector('.faq-button img');

questions.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        
        // поправить баг, при загрузке не меняется картинка
        if (item.classList.contains('active')) {
            buttonImg.src = 'images/icon-minus.svg'
        }
        else {
            buttonImg.src = 'images/icon-plus.svg'
        }
    })
})

