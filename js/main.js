// Function to replace template variables
function replaceTemplateVariables(html, config) {
    return html.replace(/\{\{([^}]+)\}\}/g, (match, path) => {
        return path.split('.').reduce((obj, key) => obj && obj[key], config) || match;
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    if (mobileMenuButton && mobileMenu) {
        // Toggle mobile menu
        mobileMenuButton.addEventListener('click', function () {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });

        // Close mobile menu when clicking on a link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// FAQ functionality
function initializeFAQ() {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');

            // Close all other FAQ items
            faqToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    const otherContent = otherToggle.nextElementSibling;
                    const otherIcon = otherToggle.querySelector('.faq-icon');
                    otherContent.classList.add('hidden');
                    otherIcon.classList.remove('rotate-180');
                }
            });

            // Toggle current FAQ item
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        });
    });
}

// Initialize everything after components and config are loaded
function initializeApp() {
    initializeMobileMenu();
    initializeFAQ();
}