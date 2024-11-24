document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("0Aym7cBkGokcXxikd"); // Your EmailJS user ID
    })();

    // Listener for the donate form submission
    document.querySelector('.donate-here').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect the form data
        const firstName = document.querySelector('.name-input1').value.trim();
        const lastName = document.querySelector('.name-input2').value.trim();
        const email = document.querySelector('.email-input').value.trim();
        const comment = document.querySelector('.comment-input').value.trim();

        // Validate the form fields
        if (!firstName || !lastName || !email || !comment) {
            alert('Please fill all fields before submitting!');
            return; // Exit if any field is empty
        }

        // Send the data via Email.js
        emailjs.send("service_wsfumtn", "template_pn36jcq", { 
            first_name: firstName,
            last_name: lastName,
            email: email,
            comment: comment
        }).then(function(response) {
            // Success message
            alert('Thank you for your message and donation!');
            console.log('SUCCESS!', response); // Log success response
        }, function(error) {
            // Error message
            alert('Failed to send. Please try again.');
            console.error('FAILED...', error); // Log error response
        });
    });
});
