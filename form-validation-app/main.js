let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

const validateName = () => {
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name in English";
        return false;
    }
    nameError.innerHTML = "<i style='color:seagreen; font-size: 20px' class='fas fa-check-circle'></i>";
    return true;
}

const validatePhone = () => {
    let phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = "Phone number should be 11 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{11}/)){
        phoneError.innerHTML = "Only digits are accepted";
        return false;
    }

    phoneError.innerHTML = "<i style='color:seagreen; font-size: 20px' class='fas fa-check-circle'></i>";
    return true;
}

const validateEmail = () => {
    let email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid e-mail";
        return false;
    }

    emailError.innerHTML = "<i style='color:seagreen; font-size: 20px' class='fas fa-check-circle'></i>";
    return true;

}

const validateMessage = () => {
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let limit = 100;
    let messageLength = message.length;
    let left =required - messageLength;
    let exceeded = messageLength - limit;

    if(messageLength >= limit){
        messageError.innerHTML = `${exceeded} characters exceeded the limit of ${limit}.`;
    }

    else if(left > 0){
        messageError.innerHTML = `${left} more characters is required`;
        return false;
    }
    else{
        messageError.innerHTML = "<i style='color:seagreen; font-size: 20px' class='fas fa-check-circle'></i>";
        return true;
    }

}

const validateForm = () => {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error(s) to submit.";
        setTimeout(() => {submitError.style.display = "none";}, 3000);
        return false;
    }
}