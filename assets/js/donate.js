
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize EmailJS
      (function() {
        emailjs.init("Aym7cBkGokcXxikd"); // Replace with your EmailJS user ID
      })();

      // Listener for the donate form submission
      document.querySelector('.involved-donate-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = document.querySelector('.involved-name-first').value.trim();
        const lastName = document.querySelector('.involved-name-last').value.trim();
        const email = document.querySelector('.involved-email').value.trim();
        const comment = document.querySelector('.involved-comment').value.trim();

        if (!firstName || !lastName || !email || !comment) {
          alert('Please fill all fields before submitting!');
          return;
        }

        emailjs.send("service_wsfumtn", "template_pn36jcq", {
          first_name: firstName,
          last_name: lastName,
          email: email,
          comment: comment
        }).then(function(response) {
          alert('Thank you for your message and donation!');
          console.log('SUCCESS!', response);
        }, function(error) {
          alert('Failed to send. Please try again.');
          console.error('FAILED...', error);
        });
      });
    });
