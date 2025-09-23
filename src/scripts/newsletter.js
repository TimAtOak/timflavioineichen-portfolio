document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletter-form');
  const successMessage = document.getElementById('success-message');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const email = document.getElementById('email').value;
      const marketing = document.getElementById('marketing').checked;
      
      // Simulate form submission
      const submitBtn = form.querySelector('.subscribe-btn');
      const originalText = submitBtn.querySelector('.btn-text').textContent;
      
      // Show loading state
      submitBtn.querySelector('.btn-text').textContent = 'Subscribing...';
      submitBtn.disabled = true;
      
      // Simulate API call delay
      setTimeout(() => {
        // Hide form and show success message
        form.style.display = 'none';
        successMessage.classList.add('show');
        
        // Reset form (in case user wants to subscribe again)
        setTimeout(() => {
          form.reset();
          submitBtn.querySelector('.btn-text').textContent = originalText;
          submitBtn.disabled = false;
        }, 500);
        
      }, 1500);
      
      // Log subscription data (replace with actual API call)
      console.log('Newsletter subscription:', {
        email: email,
        marketing: marketing,
        timestamp: new Date().toISOString()
      });
    });
  }
});
