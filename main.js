var inputNameRegister = document.querySelector("#inputNameRegister");
var inputEmailRegister = document.querySelector("#inputEmailRegister");
var inputPasswordRegister = document.querySelector("#inputPasswordRegister");
var inputRepeatPasswordRegister = document.querySelector("#inputRepeatPasswordRegister");
var checkBox = document.querySelector("#checkBox");

var showPassword = document.querySelector(".showPassword")
var hidePassword = document.querySelector(".hidePassword");
var blockEyes = document.querySelector("#block-eyes");

var showRepeatPassword = document.querySelector(".showRepeatPassword")
var hideRepeatPassword = document.querySelector(".hideRepeatPassword");
var blockEyesRepeat = document.querySelector("#block-eyes-repeat");

var enterBtnLogin = document.querySelector(".enter-btn-login");


var listRegisterAccount = [];


hidePassword.style = `
    display: none;

`

hideRepeatPassword.style = `
    display: none;

`

// Get Info Register 

function getInfo() {
    var infoUser = {
        getNameUser: inputNameRegister.value,
        getEmailUser: inputEmailRegister.value,
        getPassUser: inputPasswordRegister.value,
        getRepeatPassUser: inputRepeatPasswordRegister.value,
    }

    if(inputNameRegister.value === "") {
        alert("Please fill your name in the form");
    } else if(inputEmailRegister.value === "") {
        alert("Please fill your Email in the form");
    } else if(inputPasswordRegister.value === "") {
        alert("Please fill your Password in the form");
    } else if(inputRepeatPasswordRegister.value === "") {
        alert("Please fill your Password in the form");
    }  
    
    if(inputRepeatPasswordRegister.value !== inputPasswordRegister.value) {
        alert("Repeated password is incorrect");
    } else if(checkBox.checked === false) {
            alert("Accept the terms to continue");
    } else if(checkBox.checked === true ) {
        if(inputRepeatPasswordRegister.value === "") {
            alert("Fill in the information");
        } else if (inputEmailRegister.value === "") {
            alert("Fill in the information");
        } else if(inputNameRegister.value === "") {
            alert("Fill in the information"); 
        } else if(inputPasswordRegister.value === "") {
            alert("Fill in the information");
        } else {
            listRegisterAccount.push(infoUser);
            localStorage.setItem("listRegisterAccount",JSON.stringify(listRegisterAccount));
            alert("Successful account registration");

            window.location = "https://orangesmw1.github.io/LoginOrangesmw/";

        }
    }

       
}
// Show Password 

function eyesShowPassword() {
    if(inputPasswordRegister.type === "password") {
        inputPasswordRegister.type = "text";

        hidePassword.style = `
            display: block;
        `
        showPassword.style = `
            display: none;
        `
    } 
}

function eyesHidePassword() {
    if(inputPasswordRegister.type === "text") {
        inputPasswordRegister.type = "password";
        hidePassword.style = `
            display: none; 
        `
        showPassword.style = `
            display: block;
        `
    }
}

function eyesShowRepeatPassword() {
    if(inputRepeatPasswordRegister.type === "password") {
        inputRepeatPasswordRegister.type = "text";

        hideRepeatPassword.style = `
            display: block;
        `
        showRepeatPassword.style = `
            display: none;
        `
    } 
}

function eyesHideRepeatPassword() {
    if(inputRepeatPasswordRegister.type === "text") {
        inputRepeatPasswordRegister.type = "password";
        hideRepeatPassword.style = `
            display: none; 
        `
        showRepeatPassword.style = `
            display: block;
        `
    }
}

// Remove Input 

function resetInput() {
    // alert("You have successfully registered an account");

    inputNameRegister.value = "";
    inputEmailRegister.value = "";
    inputPasswordRegister.value = "";
    inputRepeatPasswordRegister.value = "";
    checkBox.checked = false;
}

// Enter Login 

if(inputNameRegister) {
    inputNameRegister.addEventListener("keypress",function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            enterBtnLogin.click();
        }
    })
} 

if(inputEmailRegister) {
    inputEmailRegister.addEventListener("keypress",function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            enterBtnLogin.click();
        }
    })
} 

if(inputPasswordRegister) {
    inputPasswordRegister.addEventListener("keypress",function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            enterBtnLogin.click();
        }
    })
}

if (inputRepeatPasswordRegister) {
    inputRepeatPasswordRegister.addEventListener("keypress",function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            enterBtnLogin.click();
        }
    })
}

if (checkBox){
    checkBox.addEventListener("keypress",function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            enterBtnLogin.click();
        }
    })
}

