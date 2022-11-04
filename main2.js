var inputNameRegister = document.querySelector("#inputNameRegister");
var inputEmailRegister = document.querySelector("#inputEmailRegister");
var inputPasswordRegister = document.querySelector("#inputPasswordRegister");
var inputRepeatPasswordRegister = document.querySelector("#inputRepeatPasswordRegister");
var checkBox = document.querySelector("#checkBox");
var listRegisterAccount = [];

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
    } else 
    if(checkBox.checked === false) {
        alert("Accept the terms to continue");
    } else {
        listRegisterAccount.push(infoUser);
        localStorage.setItem("listRegisterAccount",JSON.stringify(listRegisterAccount));

        resetInput();
        alert("You have successfully registered an account");
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