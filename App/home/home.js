const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');
const newsletterMsg = document.getElementById('newsletter-msg');

if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = newsletterEmail.value.trim();

        if (!email) {
            newsletterMsg.style.display = 'block';
            newsletterMsg.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
            newsletterMsg.style.color = '#f87171';
            newsletterMsg.style.border = '1px solid #ef4444';
            newsletterMsg.textContent = 'Please enter your email address.';
            newsletterEmail.focus();
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            newsletterMsg.style.display = 'block';
            newsletterMsg.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
            newsletterMsg.style.color = '#f87171';
            newsletterMsg.style.border = '1px solid #ef4444';
            newsletterMsg.textContent = 'Please enter a valid email address .';
            newsletterEmail.focus();
            return;
        }

        newsletterMsg.style.display = 'block';
        newsletterMsg.style.backgroundColor = 'rgba(74, 222, 128, 0.15)';
        newsletterMsg.style.color = '#4ade80';
        newsletterMsg.style.border = '1px solid #22c55e';
        newsletterMsg.textContent = 'Thank you for subscribing to The Botanical Dispatch!';
        newsletterEmail.value = '';

        setTimeout(function () {
            newsletterMsg.style.display = 'none';
        }, 5000);
    });
}
