document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactform');
    const formStatus = document.getElementById('formMessages');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Optional: Basic validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('Subject').value;
        const message = document.getElementById('message').value;


        if (!name || !email || !phone || !subject || !message) {
            formStatus.innerText = 'Please fill out all fields!';
            formStatus.style.color = 'red';
            return;
        }

        // Gather form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('Form data:', data);

        // Simulate sending data
        setTimeout(() => {
            formStatus.innerText = 'Message sent successfully!';
            formStatus.style.color = 'green';
            form.reset(); // Clear the form
        }, 1000); // Simulate network delay
    });
});