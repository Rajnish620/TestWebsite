
document.addEventListener("DOMContentLoaded", function () {
const Firstname = document.getElementById("FName");
const Lastname = document.getElementById("LName");
const FirstnameError = document.getElementById("firstnameError");
const LastnameError = document.getElementById("lastnameError");
const SignUpButton = document.getElementById("signupButton");
const SignUpSuccess = document.getElementById("Sign-Up-Successfull");
const email = document.getElementById("Email");
const emailError = document.getElementById("emailError");
const Password = document.getElementById("Password");
const PassError = document.getElementById("PassError");
const male = document.getElementById("male");
const maleDiv = document.getElementById("male-div");
const female = document.getElementById("female");
const femaleDiv = document.getElementById("female-div");
const custom = document.getElementById("custom");
const customDiv = document.getElementById("custom-div");








SignUpButton.addEventListener("click", function () {
    
    const firstNameValue = Firstname.value;
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
        SignUpSuccess.style.color = "green";
        SignUpSuccess.textContent = "Sign-Up Successfull";
    }

    if(male.checked){
        maleDiv.style.border = "2px solid green";

    } else if(female.checked){
        femaleDiv.style.border = "2px solid green";

    } else if(custom.checked){
        customDiv.style.border = "2px solid green";
    }

    
   if(firstNameValue !=""){
    FirstnameError.textContent = "";
    Firstname.style.border = "2px solid green";

    }
    if(lastNameValue !=""){
    LastnameError.textContent = "";
    Lastname.style.border = "2px solid green";
    }
    if(email.value !=""){
    emailError.textContent ="";
    email.style.border = "2px solid green";
    }
    if(Password.value !=""){
    PassError.textContent = "";
    Password.style.border = "2px solid green";
    }

    if(firstNameValue !="" && lastNameValue !="" && email.value !="" && Password.value !=""){
        Firstname.value= "";
        Lastname.value= "";
        email.value= "";
        Password.value= "";
    }

    


    

  
    
    
});
});