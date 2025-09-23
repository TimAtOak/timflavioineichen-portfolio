document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('hero-video');
  const scrollBtn = document.getElementById('scroll-down-btn');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  if (video) {
    // Add loaded class after a delay to allow video to start and hide controls
    setTimeout(() => {
      video.classList.add('loaded');
    }, 1500); // 1.5 second delay to ensure video has started
    
    // Fallback: Add class when iframe loads (in case setTimeout isn't enough)
    video.addEventListener('load', () => {
      setTimeout(() => {
        video.classList.add('loaded');
      }, 1000);
    });
  }

  // Scroll down functionality
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function() {
      // Scroll to spotify section
      const spotifySection = document.getElementById('spotify');
      if (spotifySection) {
        const elementTop = spotifySection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - 100,
          behavior: 'smooth'
        });
      } else {
        // Fallback: scroll down by viewport height
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    });
  }

  // Navigation smooth scrolling - SIMPLIFIED AND RELIABLE
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Remove # from href
      const targetElement = document.getElementById(targetId);
      
      console.log('Clicked:', targetId, 'Found element:', targetElement); // Debug log
      
      if (targetElement) {
        const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
        const navOffset = 100; // Fixed offset for navigation
        
        window.scrollTo({
          top: elementTop - navOffset,
          behavior: 'smooth'
        });
      } else if (targetId === 'hero') {
        // Special case for hero - scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        console.error('Section not found:', targetId);
        // Fallback - try to find by class or other selector
        const fallbackElement = document.querySelector('.' + targetId) || document.querySelector('[data-section="' + targetId + '"]');
        if (fallbackElement) {
          const elementTop = fallbackElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add active class to nav links based on scroll position
  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 150; // Fixed offset for nav detection
    let activeSet = false;
    
    navLinks.forEach(link => {
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement && !activeSet) {
        const offsetTop = targetElement.offsetTop;
        const offsetHeight = targetElement.offsetHeight;
        
        // Check if this section is in view
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          activeSet = true;
        }
      }
    });
    
    // Default to "Top" if at very top of page
    if (window.scrollY < 100) {
      navLinks.forEach(l => l.classList.remove('active'));
      const topLink = document.querySelector('a[href="#hero"]');
      if (topLink) topLink.classList.add('active');
    }
  }

  // Listen for scroll events to update active nav link
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        updateActiveNavLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial check
  updateActiveNavLink();
});
