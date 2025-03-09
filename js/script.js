const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 130) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
})

const menuLinks = document.querySelectorAll('.header-menu-link');

// Изначально активируем первый пункт (Главная)
document.querySelector('.header-menu-item:first-child').classList.add('active');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Удаляем класс active у всех пунктов меню
        document.querySelectorAll('.header-menu-item').forEach(item => item.classList.remove('active'));
        
        // Добавляем класс active к родительскому элементу выбранного пункта
        link.parentElement.classList.add('active');
    });
});
