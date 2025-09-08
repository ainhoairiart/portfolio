// Menu burger functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    // Toggle menu burger
    burgerMenu.addEventListener('click', function() {
        const isActive = burgerMenu.classList.contains('active');

        if (isActive) {
            // Fermer le menu
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
            body.style.overflow = ''; // Rétablir le scroll
        } else {
            // Ouvrir le menu
            burgerMenu.classList.add('active');
            mobileMenu.classList.add('active');
            burgerMenu.setAttribute('aria-expanded', 'true');
            body.style.overflow = 'hidden'; // Bloquer le scroll
        }
    });

    // Fermer le menu quand on clique sur un lien
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        });
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    });

    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Si on passe en mode desktop, fermer le menu mobile
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    });

    // ===== CONFIGURATION SWIPER.JS AVEC EFFET CENTRE PLUS GRAND =====

    // Initialiser Swiper pour la section "Mes projets"
    const projectsSwiper = new Swiper('.mes-projets-swiper', {
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        // Important pour l'effet "centre plus grand"
        breakpoints: {
            0:    { slidesPerView: 1.15 },
            640:  { slidesPerView: 1.6  },
            900:  { slidesPerView: 2.2  },
            1200: { slidesPerView: 3    }
        },

        slideToClickedSlide: true,

        // Navigation
        navigation: {
            nextEl: '.mes-projets-swiper .swiper-button-next',
            prevEl: '.mes-projets-swiper .swiper-button-prev',
        },

        // Pagination
        pagination: {
            el: '.mes-projets-swiper .swiper-pagination',
            clickable: true,
        },

        // Support tactile et clavier
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        // Effets et transitions
        speed: 600,
        effect: 'slide',

        // Callbacks pour améliorer l'expérience
        on: {
            init: function () {
                console.log('Swiper initialisé avec effet centre plus grand');
            },
            slideChange: function () {
                console.log('Slide changé');
            },
        }
    });

    // Pause l'autoplay quand on survole le carrousel
    const swiperContainer = document.querySelector('.mes-projets-swiper');
    if (swiperContainer) {
        swiperContainer.addEventListener('mouseenter', () => {
            projectsSwiper.autoplay.stop();
        });

        swiperContainer.addEventListener('mouseleave', () => {
            projectsSwiper.autoplay.start();
        });
    }
});
