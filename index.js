document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    const body = document.body;

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            body.classList.add('dropdown-active');
        });

        dropdown.addEventListener('mouseleave', () => {
            body.classList.remove('dropdown-active');
        });
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.navbar')) {
            navList.classList.remove('active');
            body.classList.remove('dropdown-active');
        }
    });
});
