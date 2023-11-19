window.onload = function() {

async function loginUser() {
  loginOrCreate(`/auth/login`);
}

async function createUser() {
  console.log('create user function successfully called');
  loginOrCreate(`/auth/create`);
}

async function loginOrCreate(endpoint) {
  console.log('login or create function called successfully');
  console.log(endpoint);
  const name = document.querySelector('#username')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ name: name, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    window.location.href = 'focus.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}
document.querySelector('#createUser').addEventListener('click', createUser);
document.querySelector('#loginButton').addEventListener('click', loginUser);
console.log('helloooo');
}