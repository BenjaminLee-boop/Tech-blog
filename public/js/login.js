
const loginFormHandler = async (event) => {
  event.preventDefault();
  const signInEmail = document.querySelector('.signInEmail').value.trim();
  const signInPassword = document.querySelector('.signInPassword').value.trim();

  if (signInEmail && signInPassword) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ signInEmail, signInPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('.name').value.trim();
  const email = document.querySelector('.email').value.trim();
  const password = document.querySelector('.password').value.trim();

  if (name && email && password) {
    console.log(JSON.stringify({ name, email, password }));
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup')
  .addEventListener('submit', signupFormHandler);
