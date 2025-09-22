
 
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize EmailJS
      (function() {
        emailjs.init("0Aym7cBkGokcXxikd"); // Replace with your EmailJS user ID
      })();

      // Listener for the volunteer form submission
      document.querySelector('.volunteer-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const volunteerName = document.querySelector('.volunteer-name').value.trim();
        const volunteerEmail = document.querySelector('.volunteer-email').value.trim();
        const volunteerMessage = document.querySelector('.volunteer-message').value.trim();

        if (!volunteerName || !volunteerEmail || !volunteerMessage) {
          alert('Please fill all fields before submitting!');
          return;
        }

        emailjs.send("service_wsfumtn", "template_4tk5q5p", {
          volunteer_Name: volunteerName,
          volunteer_Email: volunteerEmail,
          volunteer_Message: volunteerMessage
        }).then(function(response) {
          alert('Thank you for your message and for reaching out. We truly appreciate your support and interest in helping us make a difference. We will get back to you as soon as possible');
          console.log('SUCCESS!', response);
        }, function(error) {
          alert('Failed to send. Please try again.');
          console.error('FAILED...', error);
        });
      });
    });
