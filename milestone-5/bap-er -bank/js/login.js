//step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2:get the email address inside the email input field
    //    always remember to use .value to get text from a input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    //get the password as same as step-2
    const passwordField= document.getElementById('user-password');
    const password=passwordField.value;
    console.log(password);
if(email === 'sontan@baap.com' && password === 'secret'){
    window.location.href='bank.html';
}
else{
    // console.log('invalid user');
    alert('Wrong info');
}


})