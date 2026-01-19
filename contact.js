// REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyYNxVxGLzOi8bkr_ol-96tJxyyDdwaqKGgSED9wENnX6xemr0jKw6Qovjm-zCx1vbQ/exec";

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('.contact-btn-submit');

    // Popup Elements
    const popupOverlay = document.getElementById('successPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // validation check (basic)
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Show loading state
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            // Collect form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Send to Google Apps Script
            fetch(SCRIPT_URL, {
                method: 'POST',
                // Important: Do NOT set Content-Type to application/json to avoid CORS preflight options request
                // Google Apps Script will treat this as text/plain and we parse it in the backend
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(result => {
                    if (result.status === 'success') {
                        // Show success popup
                        showPopup();
                        form.reset();
                    } else {
                        alert('Error: ' + (result.message || 'Something went wrong.'));
                    }
                })
                .catch(error => {
                    console.error('Error!', error);
                    alert('There was a problem sending your message. Please try again later.');
                })
                .finally(() => {
                    // Reset button state
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Popup Logic
    function showPopup() {
        popupOverlay.classList.add('active');
    }

    function closePopup() {
        popupOverlay.classList.remove('active');
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', closePopup);
    }

    // Close popup if clicking outside the content
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                closePopup();
            }
        });
    }
});
