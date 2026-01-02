
document.addEventListener("DOMContentLoaded", function () {
const Fiestname = document.getElementById("FName");
const Lastname = document.getElementById("LName");
const FirstnameError = document.getElementById("firstnameError");
const LastnameError = document.getElementById("lastnameError");
const SignUpButton = document.getElementById("signupButton");
const SignUpSuccess = document.getElementById("Sign-Up=Successful!");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const Password = document.getElementById("Password");
const PassError = document.getElementById("PassError");
const male = document.getElementById("male");
const female = document.getElementById("female");
const custom = document.getElementById("custom");
const GenderError = document.getElementById("GenderError");








SignUpButton.addEventListener("click", function () {
    
    const firstNameValue = Fiestname.value;
    const lastNameValue = Lastname.value;
   


    if (firstNameValue == "") {
        FirstnameError.textContent = "Please enter your First Name.";
        FirstnameError.style.color = "red";
        
    }
    else if (lastNameValue == "") {
        LastnameError.textContent = "Please enter your Last Name.";
        LastnameError.style.color = "red";

    } 
    else if(email.value == ""){
        emailError.textContent ="Please enter the Email.";
        emailError.style.color = "red";

        
    }else if(Password.value == ""){
        PassError.textContent = "Please enter the Password.";
        PassError.style.color = "red";
     }
     else {
        localStorage.setItem("First Name", firstNameValue);
        localStorage.setItem("Last Name", lastNameValue);
        localStorage.setItem("Email", email.value);
        localStorage.setItem("Password", Password.value);
        localStorage.setItem("Gender", male.checked ? "Male" : female.checked ? "Female" : "Custom");
        SignUpSuccess.textContent = "Sign-Up Successful!";
    }

    if(male.checked || female.checked || custom.checked){
        GenderError.style.color = "green";
        GenderError.textContent="Success";
 
    }

    
   if(firstNameValue !=""){
    FirstnameError.textContent = "";
    }
    if(lastNameValue !=""){
    LastnameError.textContent = "";
    }
    if(firstNameValue !="" &&lastNameValue !=""){
    FirstnameError.style.color = "green";
    FirstnameError.textContent = "Success!";

    }

    if(email.value !=""){
    emailError.style.color = "green";
    emailError.textContent = "Success!";
    }
    if(Password.value !=""){
    PassError.style.color = "green";
    PassError.textContent = "Success!";
    }
   
});
});