document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 0;
    const book = document.querySelector('.book');
    const pages = document.querySelectorAll('.book .page');
    const prevButton = document.querySelector('#prevPage');
    const nextButton = document.querySelector('#nextPage');

    // Configuration initiale
    function initializeBook() {
        pages.forEach((page, index) => {
            page.style.zIndex = pages.length - index;
        });
        updateButtons();
    }

    function updateButtons() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage >= pages.length - 1;
    }

    function flipPage(pageIndex) {
        if (pageIndex < 0 || pageIndex >= pages.length) return;

        pages.forEach((page, index) => {
            if (index < pageIndex) {
                page.classList.add('flipped');
                page.style.zIndex = index;
            } else {
                page.classList.remove('flipped');
                page.style.zIndex = pages.length - index;
            }
        });

        currentPage = pageIndex;
        updateButtons();
    }

    // Gestionnaires d'événements
    prevButton.addEventListener('click', () => {
        flipPage(currentPage - 1);
    });

    nextButton.addEventListener('click', () => {
        flipPage(currentPage + 1);
    });

    // Permettre de cliquer sur les pages pour les tourner
    pages.forEach((page, index) => {
        page.addEventListener('click', () => {
            if (index === currentPage) {
                flipPage(currentPage + 1);
            } else if (index === currentPage - 1) {
                flipPage(currentPage - 1);
            }
        });
    });

    // Initialisation
    initializeBook();
});
