// Add event listeners to forms
document.getElementById('donation-form').addEventListener('submit', handleDonationFormSubmit);
document.getElementById('contact-form').addEventListener('submit', handleContactFormSubmit);
document.getElementById('signin-form').addEventListener('submit', handleSigninFormSubmit);
document.getElementById('signup-form').addEventListener('submit', handleSignupFormSubmit);

// Function to handle donation form submission
function handleDonationFormSubmit(event) {
    event.preventDefault();
    const donationAmount = document.getElementById('donation-amount').value;
    const customAmount = document.getElementById('custom-amount').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Process donation payment
    console.log(`Donation of ${donationAmount} ${customAmount ? `(${customAmount})` : ``} via ${paymentMethod} successful!`);
}

// Function to handle contact form submission
function handleContactFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Process contact form submission
    console.log(`Message from ${name} (${email}): ${message}`);
}

// Function to handle signin form submission
function handleSigninFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Process signin form submission
    console.log(`Signin attempt with username ${username} and password ${password}`);
}

// Function to handle signup form submission
function handleSignupFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Process signup form submission
    console.log(`Signup attempt with username ${username}, email ${email}, password ${password}, and confirm password ${confirmPassword}`);
}
//profile 
document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const profilePicture = document.getElementById('profile-picture');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicture.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert('Please select a file to upload.');
    }
});
