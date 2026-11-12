const registerForm = document.getElementById('coffeeClubForm');
const fullNameInput = document.getElementById('fullName');
const usernameInput = document.getElementById('username');
const usernameCharCount = document.getElementById('usernameCharCount');
const emailInput = document.getElementById('email');
const emailTag = document.getElementById('emailTag');
const emailCheckIcon = document.getElementById('emailCheckIcon');
const emailHint = document.getElementById('emailHint');
const emailHintIcon = document.getElementById('emailHintIcon');
const emailHintText = document.getElementById('emailHintText');
const passwordInput = document.getElementById('password');
const togglePassBtn = document.getElementById('togglePassBtn');
const togglePassIcon = document.getElementById('togglePassIcon');
const passStrengthFill = document.querySelector('.pass-strength-fill');
const passwordTag = document.getElementById('passwordTag');
const favColorInput = document.getElementById('favColor');
const colorPreviewDot = document.getElementById('colorPreviewDot');
const colorHexLabel = document.getElementById('colorHexLabel');
const moodSlider = document.getElementById('moodSlider');
const moodLevelDisplay = document.getElementById('moodLevelDisplay');
const aboutYouInput = document.getElementById('aboutYou');
const termsCheck = document.getElementById('termsCheck');
const formErrorAlert = document.getElementById('formErrorAlert');
const formSuccessBanner = document.getElementById('formSuccessBanner');
const successToast = document.getElementById('successToast');
const toastCloseBtn = document.querySelector('.toast-close-btn');

if (usernameInput && usernameCharCount) {
  usernameInput.addEventListener('input', function () {
    usernameCharCount.textContent = usernameInput.value.length + ' / 16 chars';
  });
}

if (emailInput) {
  emailInput.addEventListener('input', function () {
    const val = emailInput.value.trim();
    if (!val) {
      emailInput.classList.remove('valid-demo');
      if (emailTag) emailTag.style.display = 'none';
      if (emailCheckIcon) emailCheckIcon.style.display = 'none';
      if (emailHint) emailHint.style.display = 'none';
      return;
    }

    if (!val.includes('@') || !val.includes('.')) {
      emailInput.classList.remove('valid-demo');
      if (emailTag) {
        emailTag.style.display = 'inline';
        emailTag.textContent = 'Invalid Format';
        emailTag.style.color = '#c62828';
      }
      if (emailCheckIcon) emailCheckIcon.style.display = 'none';
      if (emailHint) {
        emailHint.style.display = 'flex';
        emailHintIcon.textContent = 'error';
        emailHintIcon.style.color = '#c62828';
        emailHintText.textContent = 'Please enter a valid email address ';
        emailHintText.style.color = '#c62828';
      }
    } else {
      emailInput.classList.add('valid-demo');
      if (emailTag) {
        emailTag.style.display = 'inline';
        emailTag.textContent = 'Verified Valid';
        emailTag.style.color = '#2e7d32';
      }
      if (emailCheckIcon) emailCheckIcon.style.display = 'inline';
      if (emailHint) {
        emailHint.style.display = 'flex';
        emailHintIcon.textContent = 'verified';
        emailHintIcon.style.color = '#2e7d32';
        emailHintText.textContent = 'Valid email format & available for membership';
        emailHintText.style.color = '#2e7d32';
      }
    }
  });
}

if (passwordInput) {
  passwordInput.addEventListener('input', function () {
    const len = passwordInput.value.length;
    if (len === 0) {
      if (passStrengthFill) passStrengthFill.style.width = '0%';
      if (passwordTag) {
        passwordTag.textContent = 'Min 8 characters';
        passwordTag.style.color = '#885210';
      }
    } else if (len < 8) {
      if (passStrengthFill) {
        passStrengthFill.style.width = (len / 8 * 60) + '%';
        passStrengthFill.style.backgroundColor = '#f59e0b';
      }
      if (passwordTag) {
        passwordTag.textContent = (8 - len) + ' more chars needed';
        passwordTag.style.color = '#c62828';
      }
    } else {
      if (passStrengthFill) {
        passStrengthFill.style.width = '100%';
        passStrengthFill.style.backgroundColor = '#2e7d32';
      }
      if (passwordTag) {
        passwordTag.textContent = 'Valid password length';
        passwordTag.style.color = '#2e7d32';
      }
    }
  });
}

if (togglePassBtn && passwordInput) {
  togglePassBtn.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      if (togglePassIcon) togglePassIcon.textContent = 'visibility_off';
    } else {
      passwordInput.type = 'password';
      if (togglePassIcon) togglePassIcon.textContent = 'visibility';
    }
  });
}

if (favColorInput) {
  favColorInput.addEventListener('input', function () {
    if (colorPreviewDot) colorPreviewDot.style.backgroundColor = favColorInput.value;
    if (colorHexLabel) colorHexLabel.textContent = favColorInput.value.toUpperCase();
  });
}

if (moodSlider && moodLevelDisplay) {
  moodSlider.addEventListener('input', function () {
    moodLevelDisplay.textContent = moodSlider.value + '% Zen';
  });
}

if (toastCloseBtn && successToast) {
  toastCloseBtn.addEventListener('click', function () {
    successToast.classList.add('hidden');
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (formErrorAlert) formErrorAlert.style.display = 'none';
    if (formSuccessBanner) formSuccessBanner.style.display = 'none';

    const fullName = fullNameInput ? fullNameInput.value.trim() : '';
    const username = usernameInput ? usernameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';
    const aboutYou = aboutYouInput ? aboutYouInput.value.trim() : '';
    const isTerms = termsCheck ? termsCheck.checked : false;

    if (!fullName) {
      showError('Please enter your full name before creating membership.');
      if (fullNameInput) fullNameInput.focus();
      return;
    }

    if (!username) {
      showError('Please enter a username before creating membership.');
      if (usernameInput) usernameInput.focus();
      return;
    }

    if (username.length < 4) {
      showError('Username must be at least 4 characters long.');
      if (usernameInput) usernameInput.focus();
      return;
    }

    if (!email) {
      showError('Please enter your email address before creating membership.');
      if (emailInput) emailInput.focus();
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showError('Please enter a valid email address containing @ and domain.');
      if (emailInput) emailInput.focus();
      return;
    }

    if (!password) {
      showError('Please enter your password before creating membership.');
      if (passwordInput) passwordInput.focus();
      return;
    }

    if (password.length < 8) {
      showError('Password must be at least 8 characters long.');
      if (passwordInput) passwordInput.focus();
      return;
    }

    if (!aboutYou) {
      showError('Please write a brief description of your morning ritual before creating membership.');
      if (aboutYouInput) aboutYouInput.focus();
      return;
    }

    if (!isTerms) {
      showError('Please agree to the Coffee Club terms to proceed.');
      if (termsCheck) termsCheck.focus();
      return;
    }

    if (formErrorAlert) formErrorAlert.style.display = 'none';

    if (formSuccessBanner) {
      formSuccessBanner.style.display = 'block';
      formSuccessBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (successToast) {
      successToast.classList.remove('hidden');
      setTimeout(function () {
        successToast.classList.add('hidden');
      }, 7000);
    }
  });
}

function showError(msg) {
  if (formErrorAlert) {
    formErrorAlert.style.display = 'block';
    formErrorAlert.textContent = msg;
    formErrorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    alert(msg);
  }
}
