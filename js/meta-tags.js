// Dynamic Meta Tags Management
function setMetaTags() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageConfig = CONFIG.meta.pages[currentPage];
  
  if (!pageConfig) return;
  
  const currentUrl = `${CONFIG.meta.siteUrl}${window.location.pathname}`;
  const imageUrl = `${CONFIG.meta.siteUrl}${CONFIG.meta.defaultImage}`;
  
  // Create or update meta tags
  const metaTags = [
    // Open Graph
    { property: 'og:title', content: pageConfig.title },
    { property: 'og:description', content: pageConfig.description },
    { property: 'og:image', content: imageUrl },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: CONFIG.meta.siteName },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageConfig.title },
    { name: 'twitter:description', content: pageConfig.description },
    { name: 'twitter:image', content: imageUrl }
  ];
  
  metaTags.forEach(tag => {
    const identifier = tag.property || tag.name;
    let metaElement = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${identifier}"]`);
    
    if (!metaElement) {
      metaElement = document.createElement('meta');
      if (tag.property) {
        metaElement.setAttribute('property', tag.property);
      } else {
        metaElement.setAttribute('name', tag.name);
      }
      document.head.appendChild(metaElement);
    }
    
    metaElement.setAttribute('content', tag.content);
  });
  
  // Update document title
  document.title = pageConfig.title;
}

// Initialize meta tags when DOM is loaded
document.addEventListener('DOMContentLoaded', setMetaTags);