document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .glass-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // Cursor Follower Blob
    const blob = document.querySelector('.cursor-blob');
    if (blob) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            blob.style.transform = `translate(${clientX - 200}px, ${clientY - 200}px)`;
        });
    }

    // Nav blur effect on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(3, 3, 3, 0.9)';
        } else {
            nav.style.background = 'rgba(3, 3, 3, 0.7)';
        }
    });

    // Custom animation for "visible" class
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleTag);
});
