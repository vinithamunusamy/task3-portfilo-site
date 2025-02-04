// Handle the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Grab the values from the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Simple form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    // Here you would send the data to your server or an API
    alert(Thanks for contacting me, ${name}! I'll respond to your message soon.);
    // Reset the form
    document.getElementById('contact-form').reset();
});
