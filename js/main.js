document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navOverlay = document.querySelector('.nav-overlay');
    const submenuToggles = document.querySelectorAll('.has-submenu');

    if(hamburger && navOverlay) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navOverlay.classList.toggle('active');
            
            // Prevent body scroll when menu open
            if(navOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Submenu Logic
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            // Only toggle if we are clicking the container itself (not the nested links)
            if(e.target === toggle || e.target.classList.contains('menu-title')) {
                toggle.classList.toggle('open');
            }
        });
    });

    // Header scroll background
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
