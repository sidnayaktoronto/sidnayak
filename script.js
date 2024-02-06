// This is just a placeholder JavaScript file.
// You can add your own custom JavaScript functionalities here if needed.
// For example, you can add smooth scrolling for navigation links, form validation, etc.

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message.length < 10) {
        alert('Please enter a message with at least 10 characters.');
        return;
    }

    // Submit the form if validation passes
    // You can use fetch or other methods to send form data to the server
    // Example:
    // fetch('submit-form.php', {
    //     method: 'POST',
    //     body: new FormData(this)
    // })
    // .then(response => {
    //     // Handle response
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
});
