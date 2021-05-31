const logout = async () => {
    const userResponse = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    });

    if (userResponse.ok) {
        document.location.replace('/');
    } else {
        alert('User failed to log out. Please try again!');
    }
};

document.querySelector('#logout').addEventListener('click', logout);