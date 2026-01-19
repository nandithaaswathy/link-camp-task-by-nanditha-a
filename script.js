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
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                alert("Thank you! Your message has been sent successfully.");
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert("Thank you! Your message has been sent successfully.");
                form.reset();

            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            });
    });
}
