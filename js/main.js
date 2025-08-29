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

// Generate projects dynamically
function generateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const projectsHTML = CONFIG.projects.map(project => {
        const tagColorMap = {
            'blue': 'bg-blue-100 text-blue-800',
            'green': 'bg-green-100 text-green-800',
            'purple': 'bg-purple-100 text-purple-800',
            'red': 'bg-red-100 text-red-800',
            'yellow': 'bg-yellow-100 text-yellow-800',
            'gray': 'bg-gray-200 text-gray-800'
        };

        const tagClasses = tagColorMap[project.tagColor] || 'bg-gray-100 text-gray-800';

        const actionButton = project.actionType === 'demo'
            ? `<div class="text-center">
              <a href="${project.demoUrl || '#'}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-${project.tagColor}-600 hover:bg-${project.tagColor}-700 text-white font-semibold rounded-lg transition-colors">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                </svg>
                Demo
              </a>
            </div>`
            : `<div class="text-center text-gray-500 font-semibold">
              
            </div>`;

        return `
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
            <div class="h-48 relative bg-cover bg-center flex items-center justify-center" style="background-image: url('${project.image}');">
              <div class="absolute inset-0 bg-gradient-to-br from-${project.gradientFrom} to-${project.gradientTo} opacity-80"></div>
              <div class="text-white text-center relative z-10">
                <div class="text-4xl mb-2">${project.icon}</div>
                <div class="text-sm opacity-90">${project.category}</div>
              </div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-xl font-bold mb-3">${project.title}</h3>
              <div class="bg-blue-50 p-4 rounded-lg mb-4">
                <ul class="space-y-2 text-blue-700">
                  ${project.description.split('\n').map(line => 
                    line.trim().startsWith('✓') ? 
                    `<li class="flex items-start">
                       <span class="text-blue-600 font-bold mr-2">✓</span>
                       <span>${line.substring(1).trim()}</span>
                     </li>` : 
                     `<li>${line}</li>`
                  ).join('')}
                </ul>
              </div>
              <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech =>
            `<span class="px-2 py-1 ${tagClasses} text-xs rounded">${tech}</span>`
        ).join('')}
              </div>
              <div class="flex-1"></div>
              ${actionButton}
            </div>
          </div>
        `;
    }).join('');

    projectsGrid.innerHTML = projectsHTML;
}

// Function to render testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (!testimonialsGrid || !CONFIG.testimonials) return;

    const testimonialsHtml = CONFIG.testimonials.map(testimonial => `
        <a href="https://www.linkedin.com/in/jens-peter-joost/details/recommendations/" target="_blank" rel="noopener noreferrer" class="block">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <!-- Desktop Layout -->
            <div class="hidden md:flex items-center justify-between mt-6">
              <div class="flex items-center">
                <img src="${testimonial.profilePicture}" alt="${testimonial.author}" class="w-24 h-24 rounded-full mr-4 object-cover">
                <div>
                  <div class="font-semibold text-gray-900">${testimonial.author}</div>
                  <div class="text-sm text-gray-600">${testimonial.jobTitle}</div>
                  <div class="text-sm text-gray-500">${testimonial.company}</div>
                </div>
              </div>
              <div class="flex text-yellow-400 text-2xl">
                ★★★★★
              </div>
            </div>
            
            <!-- Mobile Layout -->
            <div class="md:hidden mt-6">
              <div class="flex items-start space-x-4">
                <img src="${testimonial.profilePicture}" alt="${testimonial.author}" class="w-20 h-20 rounded-full object-cover flex-shrink-0">
                <div class="flex-1">
                  <div class="flex text-yellow-400 text-2xl">
                    ★★★★★
                  </div>
                  <div class="font-semibold text-gray-900">${testimonial.author}</div>
                  <div class="text-sm text-gray-600">${testimonial.jobTitle}</div>
                  <div class="text-sm text-gray-500">${testimonial.company}</div>
                </div>
              </div>
            </div>
            
            <div class="flex items-start mb-4 mt-4">
              <div class="text-blue-600 text-4xl mr-3">"</div>
              <p class="text-gray-700 italic">${testimonial.text}</p>
            </div>
            
          </div>
        </a>
    `).join('');

    testimonialsGrid.innerHTML = testimonialsHtml;
}

// Function to render FAQ items  
function renderFAQ() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer || !CONFIG.faq) return;

    const faqHtml = CONFIG.faq.map(faqItem => `
        <div class="bg-white rounded-lg shadow-md">
          <button class="w-full px-6 py-4 text-left flex justify-between items-center faq-toggle">
            <h3 class="text-lg font-semibold text-gray-900">${faqItem.question}</h3>
            <svg class="w-5 h-5 text-gray-500 transform transition-transform faq-icon" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="faq-content hidden px-6 pb-4">
            <p class="text-gray-600">${faqItem.answer}</p>
          </div>
        </div>
    `).join('');

    faqContainer.innerHTML = faqHtml;
}

// Process template variables in loaded components
function processPageContent() {
    // Get all elements that might contain template variables
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const content = section.innerHTML;
        const processedContent = replaceTemplateVariables(content, CONFIG);
        section.innerHTML = processedContent;
    });
}

// Initialize everything after components and config are loaded
function initializeApp() {
    // Process template variables first
    processPageContent();
    
    // Generate dynamic content first
    generateProjects();
    renderTestimonials();
    
    // Initialize interactive elements after content is rendered
    initializeMobileMenu();
}