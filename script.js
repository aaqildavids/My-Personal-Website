// Simple contact form handler (no backend in this starter)
(function(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      status.textContent = 'Please fill in all fields.';
      status.style.color = '#f87171';
      return;
    }
    // Simulate submission
    status.textContent = 'Thanks! Your message has been captured. I will reply soon.';
    status.style.color = '#34d399';
    form.reset();
  });
})();
