function checkNames() {
    const firstName = document.getElementById("first-name").value;
    const fNameError = document.getElementById("fname-err-msg");
    if (firstName == "" ) {
        fNameError.classList.add("error-text");
        fNameError.innerText = "First name cannot be empty";
        addErrorClass("first-name");
    } else {
        if (document.getElementById("fname-err-msg")) {
            removeErrorMsg("fname-err-msg");
        }
        addSuccessClass("first-name");
    }
    
    const lastName = document.getElementById("last-name").value;
    const lastNameError = document.getElementById("lname-err-msg");
    if (lastName =="") {
        lastNameError.classList.add("error-text");
        lastNameError.innerText = "Last name cannot be empty";
        addErrorClass("last-name");
    } else {
        if (document.getElementById("lname-err-msg")) {
            removeErrorMsg("lname-err-msg");
        }
        addSuccessClass("last-name");
    }
}

function checkEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-err-msg");
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email == "") {
        emailError.classList.add("error-text");
        emailError.innerText = "Email must have an @ and a .";
        addErrorClass("email");
    } else {
        if (document.getElementById("email-err-msg")) {
            removeErrorMsg("email-err-msg");
        }
        addSuccessClass("email");
    }
}

function checkUserName () {
    var userName = document.getElementById("username").value;
    const usernameError = document.getElementById("username-err-msg");
    if (userName.length < 3 || userName.length > 12 || userName == "") {
        usernameError.classList.add("error-text");
        usernameError.innerText = "User name must be between 3 and 12 characters";
        addErrorClass("username");
    } else {
        if (document.getElementById("username-err-msg")) {
            removeErrorMsg("username-err-msg");
        }
        addSuccessClass("username");
    }
} 

function checkPassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-err-msg");
    if (password.length < 6 || password.length > 64 || password == "") {
        passwordError.classList.add("error-text");
        passwordError.innerText = "Password must be between 6 and 64 characters";
        addErrorClass("password");
    } else {
        if (document.getElementById("password-err-msg")) {
            removeErrorMsg("password-err-msg");
        }
        addSuccessClass("password");
    }
}

function checkPasswordMatch() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const confirmPasswordError = document.getElementById("confirm-password-err-msg");
    if ( password == "" ) {
        confirmPasswordError.classList.add("error-text");
        confirmPasswordError.innerText = "Password cannot be empty";
        addErrorClass("confirm-password");
    } else {
        if (password != confirmPassword) {
            confirmPasswordError.classList.add("error-text");
            confirmPasswordError.innerText = "Passwords do not match";
            addErrorClass("confirm-password");
        } else {
            if (document.getElementById("confirm-password-err-msg")) {
                removeErrorMsg("confirm-password-err-msg");
            }
            addSuccessClass("confirm-password");
        }
    }
}


function removeErrorMsg(errorElement) {
    if (document.getElementById(`${errorElement}`)) {
        document.getElementById(`${errorElement}`).remove();
    }
}
function addSuccessClass(element) {
    // if error class is present, remove it
    if (document.getElementById(`${element}`).classList.contains("error")) {
        document.getElementById(`${element}`).classList.remove("error");
    } 
    document.getElementById(`${element}`).classList.add('success');
}
function addErrorClass(element) {
    if (document.getElementById(`${element}`).classList.contains("success")) {
        document.getElementById(`${element}`).classList.remove("success");
    } 
    document.getElementById(`${element}`).classList.add('error');
}


document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    checkNames();
    checkEmail();
    checkUserName();
    checkPassword();
    checkPasswordMatch();
});


