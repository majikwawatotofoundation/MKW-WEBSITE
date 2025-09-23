document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS
  emailjs.init("-a5rpnwvIcbJE2NFB"); // Your EmailJS Public Key

  const form = document.getElementById('subscribe-form');
  const message = document.getElementById('subscribe-message');
  const btnText = form.querySelector('.btn-text');
  const btnLoading = form.querySelector('.btn-loading');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading spinner
    btnText.classList.add('d-none');
    btnLoading.classList.remove('d-none');
    message.textContent = "";

    emailjs.sendForm('service_rwksiuj', 'template_rarwih9', this)
      .then(() => {
        message.textContent = "✅ Thank you for subscribing!";
        message.style.color = "green";
        form.reset();
      })
      .catch((error) => {
        message.textContent = "❌ Failed to send. Please try again.";
        message.style.color = "red";
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        // Hide loading spinner
        btnText.classList.remove('d-none');
        btnLoading.classList.add('d-none');
      });
  });
});
