document.addEventListener('DOMContentLoaded', () =>{
    (function(){
        emailjs.init("mv36TlOze_qyLMwmk"); // Replace with your EmailJS user ID
       })();
       document.querySelector('.subscribe-container').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            emailjs.sendForm('service_cv5v8st', 'template_kl7noza', this)
                .then(function() {
                    alert('Thank you for subscribing!'); // Success message
                }, function(error) {
                    alert('Failed to send. Please try again.'); // Error message
                    console.log('FAILED...', error);
                });
        });
});
