const { json } = require("sequelize");

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').values.trim();
    const password = document.querySelector('#password-login').values.trim();

    if (email && password) {
        const userResponse = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (userResponse.ok) {
            document.location.replace('/');
        } else {
            alert('User failed to log in. Please try again!');
        }
     }
    
};

const signedupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signedup').value.trim();
    const email = document.querySelector('#email-signedup').value.trim();
    const password = document.querySelector('#password-signedup').value.trim();

   if (username && email && password) {
       const userResponse = await fetch('/api/users', {
           method: 'POST',
           body: JSON.stringify({username, email, password}),
           headers: { 'Content-Type': 'application/json'},
       });

       if (userResponse.ok) {
           document.location.replace('/');
       } else {
           alert('User failed to sign up. Please try again!');
       }
   } 

};

document
 .querySelector('.login-form')
 .addEventListener('submit', loginFormHandler);

document
 .querySelector('.signup-form')
 .addEventListener('submit', signedupFormHandler);