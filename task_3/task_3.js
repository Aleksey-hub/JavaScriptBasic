/*3. a. Сделайте модальное (появляющееся и исчезающее) окно
b. (не обязательное задание) Сделайте анимацию при появлении и исчезании.*/
'use strict';

const modalBackground = document.querySelector('.modal_background');
const modalButton = document.querySelector('.modal_btn_open');
const modalCloseButton = document.querySelector('.modal_window button');
const modalWindow = document.querySelector('.modal_window');

modalButton.addEventListener('click', function(){
    modalWindow.classList.remove('animate__bounceOut');
    modalBackground.classList.remove('modal_hide');
    modalWindow.classList.add('animate__animated', 'animate__bounceIn');
});


modalCloseButton.addEventListener('click', function() {
    modalWindow.classList.add('animate__animated', 'animate__bounceOut');
    setTimeout(() => { modalBackground.classList.add('modal_hide'); }, 1000);
});