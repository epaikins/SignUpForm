let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let person = document.getElementsByName("person");
let form = document.querySelector(".inner");
let selectRole = document.querySelector("h5");
let signText = document.querySelector('h3');
let personValue;
let data = {
    role: "",
    username: "",
    email: "",
    password: ""
}


function signUp() {
    if (validate() && validatePassword()) {
        data = {
            role: personValue,
            username: username.value,
            email: email.value,
            password: password.value
        };
        console.log(data);
        form.classList.add('hidden');
        reset();
    }
    return data;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function validatePassword() {

    let message = ""
    // Validate Special Character
    var characters = /[!@#$%^&*]/g;

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
    
            // Validate numbers
    var numbers = /[0-9]/g;

    if(password.value === ""){
        password.style.borderColor = "red";
        password.value = ''
        message = "Invalid Password";
    }

    else if (!password.value.match(characters)) {
        password.style.borderColor = "red";
        password.value = ''
        message = "Include Special Characters";
    }

    else if (!password.value.match(lowerCaseLetters)) {
        password.style.borderColor = "red";
        password.value = ''
        message = "Include lower Case characters";
    }

    else if (!password.value.match(upperCaseLetters)) {
        password.style.borderColor = "red";
        password.value = ''
        message = "Include Upper Case characters";
    }


    else if (!password.value.match(numbers)) {
        password.style.borderColor = "red";
        password.value = '';
        message = "Include Numbers";
    }

    // Validate length
    else if (password.value.length < 6 || password.value.length > 12) {
        password.style.borderColor = "red";
        password.value = ''
        message = "Must be between 6-12 character long";
    }

    password.placeholder = message;
    if (password.value.match(characters) && password.value.length >= 6 && password.value.length <= 12 && password.value.match(numbers) && password.value.match(upperCaseLetters) && password.value.match(lowerCaseLetters)) {
        password.style.borderColor = "green";

        return true;
    }


    return false;
}

function validate() {
    for (var i = 0; i < person.length; i++) {
        if (person[i].checked) {
            personValue = person[i].value;
            break;
        }
    }

    if (email.value === "" && username.value === "" && password.value === "" && personValue === undefined) {
        email.style.borderColor = "red";
        email.placeholder = "Enter Email...";

        username.style.borderColor = "red";
        username.placeholder = "Enter username...";

        password.style.borderColor = "red";
        password.placeholder = "Enter password...";

        confirmPassword.style.borderColor = "red";
        confirmPassword.placeholder = "Enter Password...";

        selectRole.classList.remove('hidden');
    } else if (!validateEmail(email.value) && username.value === "" && password.value !== confirmPassword) {
        email.style.borderColor = "red";
        email.placeholder = "Invalid Email...";

        username.style.borderColor = "red";
        username.placeholder = "Invalid Username...";

        confirmPassword.style.borderColor = "red";
        confirmPassword.placeholder = "Password must be the same";

    } else if (personValue === undefined) {
        selectRole.classList.remove('hidden');
    } else if (username.value === "") {
        username.style.borderColor = "red";
        username.placeholder = "Invalid Username...";
    } else if (!validateEmail(email.value)) {
        email.style.borderColor = "red";
        email.placeholder = "Invalid Email...";
    } else if (password.value !== confirmPassword.value) {
        confirmPassword.style.borderColor = "red";
        confirmPassword.placeholder = "Password must be the same...";
    } else {
        email.style.borderColor = "green";
        username.style.borderColor = "green";
        confirmPassword.borderColor - 'green';
        return true;
    }
    return false;
}

function reset() {

    for (var i = 0; i < person.length; i++)
        person[i].checked = false;

    username.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
}


function facebook() {
    signText.innerText = "Signing Up with facebook..."
    form.classList.add("hidden");
}

function twitter() {
    signText.innerText = "Signing Up with twitter..."
    form.classList.add("hidden");
}

function google() {
    signText.innerText = "Signing Up with google..."
    form.classList.add("hidden");
}

function apple() {
    signText.innerText = "Signing Up with apple..."
    form.classList.add("hidden");
}