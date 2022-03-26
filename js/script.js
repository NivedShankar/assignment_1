let email = document.getElementById("email");
let password= document.getElementById("pswd");
let repassword = document.getElementById("repswd")
let emailError  = document.getElementById("errorEmail")
let errorPswd = document.getElementById("errorPswd")
let errorRePswd = document.getElementById("errorRePswd")
let regExpemail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
let phone = "[0-9]{3}?[-. ]?[0-9]{3}[-. ]?[0-9]{4}";
let phonenum = document.getElementById("phone");
let errorphone = document.getElementById("errorphone")
let name1 = document.getElementById("name");
let errorName = document.getElementById("errorName")
let state= false; 
let regState= false;
function validateSign()
{
    if(name1.value.trim() == "") {
        errorName.innerHTML = "This field is required";
        regState = false;
        errorName.style.color = "red";
    }
    if(phonenum.value.trim() == "") {
        errorphone.innerHTML = "This field is required";
        regState = false;
        errorphone.style.color = "red";
    }
    else if(phonenum.value.match(phone))
    {
        
        errorphone.innerHTML = "valid number";
        regState = true;
        errorphone.style.color ="green"
    }
    else{
       
        errorphone.innerHTML = "please enter valid number";
        regState = false;
        errorphone.style.color = "red";
    }
    if(email.value.trim() == "")
{
    emailError.innerHTML = "This field is required";
    emailError.style.color = "red";
    regState = false;
}
else if (email.value.match(regExpemail))
{
    emailError.innerHTML ="valid email";
    emailError.style.color = "green";
    regState = true;
}
else{
    emailError.innerHTML ="Please enter a valid email"
    emailError.style.color = "red";
    regState = false;
}
 if(password.value.trim() == "")
    {
            errorPswd.innerHTML =  "This field is required";
            errorPswd.style.color = "red";
            regState = false;
    }
else if(password.value.match(strongRegex))
    {
        
        errorPswd.innerHTML =  "Strong";
        errorPswd.style.color = "green";
        regState = true;
    }
else{
    errorPswd.innerHTML = "Please enter a valid password"
     errorPswd.style.color = "red";
     regState = false;
}
if(repassword.value.trim() == "")
{
        errorRePswd.innerHTML =  "This field is required";
        errorRePswd.style.color = "red";
        regState = false;
}
else if(repassword == password)
{
    
    errorRePswd.innerHTML =  "Strong";
    errorRePswd.style.color = "green";
    regState = true;
}
else{
    errorRePswd.innerHTML = "Passwords should match"
    errorRePswd.style.color = "red";
    regState = false;
}


    return regState;
}
function validate()
{ 

    if(email.value.trim() == "")
    {
        emailError.innerHTML = "This field is required";
        emailError.style.color = "red";
        state = false;
    }
    else if (email.value.match(regExpemail))
    {
        emailError.innerHTML ="valid email";
        emailError.style.color = "green";
        state = true;
    }
    else{
        emailError.innerHTML ="Please enter a valid email"
        emailError.style.color = "red";
        state = false;
    }
   
    if(password.value.trim() == "")
    {
            errorPswd.innerHTML =  "This field is required";
            errorPswd.style.color = "red";
            state = false;
    }
    else if(password.value.match(strongRegex))
    {
        
        errorPswd.innerHTML =  "Strong";
        errorPswd.style.color = "green";
        state = true;
    }
else{
    errorPswd.innerHTML = "Please enter a valid password"
     errorPswd.style.color = "red";
    state = false;
     
}
   return state;    
}


function passCheck()
{
    console.log(document.getElementById("pswd").value)
    if(password.value.match(strongRegex))
    {
        errorPswd.innerHTML = "Strong"
        errorPswd.style.color = "green";
      
    }
    else if(password.value.match(mediumRegex)){
        errorPswd.innerHTML = "Medium"
        errorPswd.style.color = "orange";
     
    }
    else
    {
        errorPswd.innerHTML = "Poor"
        errorPswd.style.color = "red";
      
    }
}
