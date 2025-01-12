document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("0Aym7cBkGokcXxikd"); // Your EmailJS user ID
    })();
  
    // Listener for the donate form submission
    document.getElementById("volunteerForm").addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
  
        // Collect the form data
        const volunteerName = document.getElementById('volunteerName').value.trim();
        const volunteerEmail = document.getElementById('volunteerEmail').value.trim();
        const volunteerMessage = document.getElementById('volunteerMessage').value.trim();
        // const theMessage = document.getElementById('message').value.trim();
        // const comment = document.querySelector('.comment-input').value.trim();
  
        // Validate the form fields
        if (! volunteerName || !volunteerEmail || !volunteerMessage) {
            alert('Please fill all fields before submitting!');
            return; // Exit if any field is empty
        }
  
        // Send the data via Email.js
        emailjs.send("service_wsfumtn", "template_4tk5q5p", { 
            volunteer_Name: volunteerName,
            volunteer_Email: volunteerEmail,
            volunteer_Message: volunteerMessage,
            
        
        }).then(function(response) {
            // Success message
            alert('Thank you for your message and for reaching out. We truly appreciate your support and interest in helping us make a difference. We will get back to you as soon as possible');
            console.log('SUCCESS!', response); // Log success response
        }, function(error) {
            // Error message
            alert('Failed to send. Please try again.');
            console.error('FAILED...', error); // Log error response
        });
    });
  });