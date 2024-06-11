const wrapper = document.querySelector('.wrapper');

const iconClose = document.querySelector('.icon-close');
const btnlogin = document.querySelector('.test');


iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnlogin.addEventListener('click', ()=> {
    console.log("hello");
});

