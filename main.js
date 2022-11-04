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

var listRegisterAccount = [];


hidePassword.style = `
    display: none;

`

hideRepeatPassword.style = `
    display: none;

`

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
        } else {
            listRegisterAccount.push(infoUser);
            localStorage.setItem("listRegisterAccount",JSON.stringify(listRegisterAccount));
            resetInput();
            alert("You have successfully registered an account");
        }   
}



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

function resetInput() {
    inputNameRegister.value = "";
    inputEmailRegister.value = "";
    inputPasswordRegister.value = "";
    inputRepeatPasswordRegister.value = "";
    checkBox.innerHTML = "";
}

function switchLoginPage() {
    window.location = "../index.html";
}