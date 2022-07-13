(() => {
  const username = document.querySelector('.username') as HTMLInputElement;
  const email = document.querySelector('.email') as HTMLInputElement;
  const pass1 = document.querySelector('.password') as HTMLInputElement;
  const pass2 = document.querySelector('.password2') as HTMLInputElement;
  const form = document.querySelector('form') as HTMLFormElement;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const errorsSpan = form.querySelectorAll('.error-message');

    for (let i = 0; i < errorsSpan.length; i++) {
      errorsSpan[i].innerHTML = '';
    }

    const validForm = validateForm(
      checkUsername(username),
      checkEmail(email),
      checkPassword(pass1),
      checkPassword(pass2),
      matchPasswords(pass1, pass2),
    );

    if (validForm) sendForm();
  });
})();

function checkUsername(username: HTMLInputElement) {
  let hasError = false;
  if (!username.value) hasError = displayError(username, 'Username is empty');

  if (username.value.length < 4)
    hasError = displayError(
      username,
      'Username must be longer than 3 characters',
    );

  if (hasError) return false;
  return true;
}

function checkEmail(email: HTMLInputElement) {
  let hasError = false;
  if (!email.value) hasError = displayError(email, 'Email is empty');

  if (hasError) return false;
  return true;
}

function checkPassword(pass: HTMLInputElement) {
  let hasError = false;

  if (!pass.value) hasError = displayError(pass, 'Password is empty');

  if (pass.value.length < 7)
    displayError(pass, 'Password must be longer than 6 characters');

  if (hasError) return false;
  return true;
}

function matchPasswords(pass1: HTMLInputElement, pass2: HTMLInputElement) {
  let hasError = false;
  if (pass1.value !== pass2.value)
    hasError = displayError(pass2, 'The passwords must be the same');

  if (hasError) return false;
  return true;
}

function displayError(el: HTMLInputElement, message: string) {
  const parentEl = el.parentElement as HTMLDivElement;
  const errorEl = parentEl.querySelector('.error-message') as HTMLSpanElement;

  errorEl.innerHTML += `${message}<br>`;
  return true;
}

function sendForm() {
  console.log('Form sent');
}

function validateForm(...args: boolean[]): boolean {
  let isValid = true;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === false) {
      isValid = false;
      break;
    }
  }
  return isValid;
}
