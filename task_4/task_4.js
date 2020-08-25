'use strict';

const buttons = document.querySelectorAll('.product button');

buttons.forEach(function (button) {
    button.addEventListener('click', (event) => {
        const parent = event.target.parentNode;
        const img = parent.querySelector('img');

        if (event.target.innerHTML === "Подробнее") {
            event.target.innerHTML = "Отмена";
            img.insertAdjacentHTML("beforeBegin", '<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem laboriosam fugiat dolores expedita, sequi quo doloremque quod voluptatibus ipsa, eveniet modi commodi minus, eligendi aperiam iusto magnam! Dolorem, praesentium quisquam!</div>');
            img.classList.add('hide');
        } else if (event.target.innerHTML === "Отмена") {
            event.target.innerHTML = "Подробнее";
            const text = parent.querySelector('.desc');
            text.remove();
            img.classList.remove('hide');
        }
    });
});
