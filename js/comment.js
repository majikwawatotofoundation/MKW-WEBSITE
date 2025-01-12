document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("mv36TlOze_qyLMwmk"); // Your EmailJS user ID
    })();

    // Listener for the donate form submission
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect the form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('comment').value.trim();
        

        // Validate the form fields
        if (!name || !email  || !comment) {
            alert('Please fill all fields before submitting!');
            return; // Exit if any field is empty
        }

        // Send the data via Email.js
        emailjs.send("service_cv5v8st", "template_zf98jdr", { 
            name: name,
            email: email,
            comment:comment,
            
        }).then(function(response) {
            // Success message
            alert('Thank you for your message! We will get back to you as soon as possible');
            console.log('SUCCESS!', response); // Log success response
        }, function(error) {
            // Error message
            alert('Failed to send. Please try again.');
            console.error('FAILED...', error); // Log error response
        });
    });
});
