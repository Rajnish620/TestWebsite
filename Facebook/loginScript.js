
document.addEventListener("DOMContentLoaded", function () {
    const Email = document.getElementById('Email');
    const Password = document.getElementById('Password');
    const Emails = document.getElementById('Emails');
    const Passwords = document.getElementById('pass');
    const LogIn = document.getElementById('Login');
    const message = document.getElementById('message');
    

    // LogIn.addEventListener("click", function () {
    //     const emailValue = Email.value;
    //     const passwordValue = Password.value;
    //     if (emailValue==""){
    //         Emails.textContent = "Please enter your Email.";
    //         Emails.style.color = "red";
             
            
    //     } 
    //     else if (passwordValue=="") {
    //         Passwords.textContent = "Please enter your Password.";
    //         Passwords.style.color = "red";
    //     } else {
    //         localStorage.setItem("Email", emailValue);
    //         localStorage.setItem("Password", passwordValue);
    //         message.style.color = "green"; 
    //         message.textContent = "Login Successful!";
            
    //     }

    // });
    
    LogIn.addEventListener("click", function () {

        const storedEmail = localStorage.getItem("Email");
        const storedPassword = localStorage.getItem("Password");
        const emailValue = Email.value;
        const passwordValue = Password.value;

        if (emailValue === storedEmail && passwordValue === storedPassword) {
            message.style.color = "green"; 
            message.textContent = "Login Successful!";
        } else {
            message.style.color = "red"; 
            message.textContent = "Invalid Email or Password.";
        }
    });
});


