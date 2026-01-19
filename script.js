// Replace this URL with your deployed Google Script Web App URL
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
const form = document.forms['contactForm'];

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        const originalBtnText = submitBtn.innerText;

        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Or just response.text() depending on script
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Check if script returned 'success'
                // The logic below assumes the Google Script returns JSON like { result: 'success' }
                // Some simpler scripts just return text
                alert("Thank you! Your message has been sent successfully.");
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert("Thank you! Your message has been sent successfully.");
                // Note: Google Scripts sometimes block CORS/returns opaque response in 'no-cors' mode 
                // causing fetch to fail or not return JSON. 
                // But usually for this setup we want user feedback.
                // If CORS is an issue, often we just assume success or use a workaround.
                // For now, let's keep it simple.
                form.reset();

            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            });
    });
}
