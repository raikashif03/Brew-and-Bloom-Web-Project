const contactForm = document.getElementById('contactForm');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const emailStatusPill = document.getElementById('emailStatusPill');
const emailCheckIcon = document.getElementById('emailCheckIcon');
const emailFeedback = document.getElementById('emailFeedback');
const contactMessage = document.getElementById('contactMessage');
const messageCharCount = document.getElementById('messageCharCount');
const contactErrorAlert = document.getElementById('contactErrorAlert');
const formSuccessAlert = document.getElementById('formSuccessAlert');

if (contactMessage && messageCharCount) {
  contactMessage.addEventListener('input', function () {
    messageCharCount.textContent = contactMessage.value.length + ' / 500';
  });
}

if (contactEmail) {
  contactEmail.addEventListener('input', function () {
    const val = contactEmail.value.trim();
    if (!val) {
      contactEmail.classList.remove('valid-field');
      if (emailStatusPill) emailStatusPill.style.display = 'none';
      if (emailCheckIcon) emailCheckIcon.style.display = 'none';
      if (emailFeedback) emailFeedback.style.display = 'none';
      return;
    }

    if (!val.includes('@') || !val.includes('.')) {
      contactEmail.classList.remove('valid-field');
      if (emailStatusPill) {
        emailStatusPill.style.display = 'inline';
        emailStatusPill.textContent = 'Invalid Format';
        emailStatusPill.style.backgroundColor = 'rgba(239, 68, 68, 0.12)';
        emailStatusPill.style.color = '#c62828';
      }
      if (emailCheckIcon) emailCheckIcon.style.display = 'none';
      if (emailFeedback) {
        emailFeedback.style.display = 'flex';
        emailFeedback.innerHTML = '<span class="material-symbols-outlined" style="color: #c62828">error</span><span style="color: #c62828">Please enter a valid email address with @</span>';
      }
    } else {
      contactEmail.classList.add('valid-field');
      if (emailStatusPill) {
        emailStatusPill.style.display = 'inline';
        emailStatusPill.textContent = 'Valid Format';
        emailStatusPill.style.backgroundColor = 'rgba(46, 125, 50, 0.12)';
        emailStatusPill.style.color = '#2e7d32';
      }
      if (emailCheckIcon) emailCheckIcon.style.display = 'inline';
      if (emailFeedback) {
        emailFeedback.style.display = 'flex';
        emailFeedback.innerHTML = '<span class="material-symbols-outlined" style="color: #2e7d32">check</span><span style="color: #2e7d32">Valid email format ready for dispatch</span>';
      }
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (contactErrorAlert) contactErrorAlert.style.display = 'none';

    const name = contactName ? contactName.value.trim() : '';
    const email = contactEmail ? contactEmail.value.trim() : '';
    const message = contactMessage ? contactMessage.value.trim() : '';

    if (!name) {
      showContactError('Please enter your name.');
      if (contactName) contactName.focus();
      return;
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      showContactError('Please enter a valid email address with @.');
      if (contactEmail) contactEmail.focus();
      return;
    }

    if (!message) {
      showContactError('Please write your message.');
      if (contactMessage) contactMessage.focus();
      return;
    }

    if (contactErrorAlert) contactErrorAlert.style.display = 'none';

    if (formSuccessAlert) {
      formSuccessAlert.classList.remove('hidden');
      formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    contactForm.reset();
    if (messageCharCount) messageCharCount.textContent = '0 / 500';
    if (emailStatusPill) emailStatusPill.style.display = 'none';
    if (emailCheckIcon) emailCheckIcon.style.display = 'none';
    if (emailFeedback) emailFeedback.style.display = 'none';
    if (contactEmail) contactEmail.classList.remove('valid-field');
  });
}

function showContactError(msg) {
  if (contactErrorAlert) {
    contactErrorAlert.style.display = 'block';
    contactErrorAlert.textContent = msg;
    contactErrorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    alert(msg);
  }
}
