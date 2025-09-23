
document.addEventListener('DOMContentLoaded', () => {
  // Init EmailJS
  emailjs.init("iEN3QnZhrOxpYEIM4"); // Your Public Key

  const form = document.getElementById('donate-form');
  const btnText = form.querySelector('.btn-text');
  const btnLoading = form.querySelector('.btn-loading');
  const loadingMsg = document.getElementById('donate-loading');
  const successMsg = document.getElementById('donate-success');
  const errorMsg = document.getElementById('donate-error');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Hide previous messages
    loadingMsg.classList.remove('d-none');
    successMsg.classList.add('d-none');
    errorMsg.classList.add('d-none');

    // Show button spinner
    btnText.classList.add('d-none');
    btnLoading.classList.remove('d-none');

    const firstName = form.querySelector('.involved-name-first').value.trim();
    const lastName = form.querySelector('.involved-name-last').value.trim();
    const email = form.querySelector('.involved-email').value.trim();
    const comment = form.querySelector('.involved-comment').value.trim();

    if (!firstName || !lastName || !email || !comment) {
      loadingMsg.classList.add('d-none');
      errorMsg.textContent = "⚠️ Please fill all fields.";
      errorMsg.classList.remove('d-none');
      btnText.classList.remove('d-none');
      btnLoading.classList.add('d-none');
      return;
    }

    emailjs.send("service_wsfumtn", "template_pn36jcq", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      comment: comment
    }).then(() => {
      loadingMsg.classList.add('d-none');
      successMsg.classList.remove('d-none');
      form.reset();
    }).catch((error) => {
      loadingMsg.classList.add('d-none');
      errorMsg.classList.remove('d-none');
      console.error("EmailJS error:", error);
    }).finally(() => {
      // Reset button
      btnText.classList.remove('d-none');
      btnLoading.classList.add('d-none');
    });
  });
});

