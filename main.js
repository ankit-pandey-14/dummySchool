// change navbar style on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});

// show/hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq)=>{
    faq.addEventListener('click', (e)=>{
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }
        else{
            icon.className = 'uil uil-plus';
        }
    })
});


// show/hide nav menu
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});