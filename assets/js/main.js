import Auth from './classes/Auth.js'
import Request from './classes/Request.js'
import Notification from './classes/Notification.js'

// Login
const loginForm = document.getElementById('login-form');
if(loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = { email, password };
        Auth.login(user);
    });
}

// register
const registerForm = document.getElementById('register-form');
if(registerForm) {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = { email, password };
        Auth.register(user);
    });
}

// Invitation
const invitationForm = document.getElementById('invitation-form');
if(invitationForm) {
    invitationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const user = { email };
        Request.inviteUser(user)
            .then(response => {
                if(response.status === 201) {
                    new Notification('success', 'The invitation was send sucessfully!')
                } else {
                    new Notification('danger', "The invitation can't be sended.")
                }
            })

    });
}

// Profile
const profileForm = document.getElementById('profile-form');
if(profileForm) {
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const user = Auth.user();
        user.name = name;
        const password = document.getElementById('password').value;
        user.password = password;
        Request.updateUser(user)
            .then(response => {
                if(response.status === 200) {
                    new Notification('success', 'The user has been updated succesfully!')
                } else {
                    new Notification('danger', 'We had problems to update the user.')
                }
            })

    });
}