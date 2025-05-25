// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuItems = document.querySelectorAll('nav ul li');
    
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');
        
        if (submenu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        }
    });
}); 