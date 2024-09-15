const questions = document.querySelectorAll('.faq-item');

const setImg = (item) => {
    const buttonImg = item.querySelector('.faq-button img');

    if (item.classList.contains('active')) {
        buttonImg.src = 'images/icon-minus.svg'
    }
    else {
        buttonImg.src = 'images/icon-plus.svg'
    }
}

questions.forEach(item => {
    setImg(item);

    item.addEventListener('click', () => {
        
        item.classList.toggle('active');
        
        setImg(item);
    })
})

