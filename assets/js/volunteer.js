document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS
  (function() {
    emailjs.init("QhGYfw4HBEKYGGGaR"); // Replace with your EmailJS user ID (public key)
  })();

  const form = document.querySelector('.volunteer-form');
  const loadingEl = form.querySelector('.loading');
  const errorEl = form.querySelector('.error-message');
  const successEl = form.querySelector('.sent-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Reset states
    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';
    successEl.style.display = 'none';

    const volunteerName = form.querySelector('.volunteer-name').value.trim();
    const volunteerEmail = form.querySelector('.volunteer-email').value.trim();
    const volunteerMessage = form.querySelector('.volunteer-message').value.trim();

    if (!volunteerName || !volunteerEmail || !volunteerMessage) {
      loadingEl.style.display = 'none';
      errorEl.style.display = 'block';
      errorEl.textContent = '⚠️ Please fill all fields before submitting.';
      return;
    }

    emailjs.send("service_qo2fxob","template_wneygwb", {
      volunteer_Name: volunteerName,
      volunteer_Email: volunteerEmail,
      volunteer_Message: volunteerMessage
    }).then(function(response) {
      loadingEl.style.display = 'none';
      successEl.style.display = 'block';
      successEl.textContent = '✅ Thank you for your application! We will reach out soon.';
      form.reset();
    }, function(error) {
      loadingEl.style.display = 'none';
      errorEl.style.display = 'block';
      errorEl.textContent = '❌ Failed to send. Please try again later.';
      console.error('FAILED...', error);
    });
  });
});
