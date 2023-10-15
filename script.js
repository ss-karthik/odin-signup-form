let inputs = document.querySelectorAll("input");

for (let i = 0; i < 6; i++) {
    inputs[i].addEventListener("invalid", function(event){
        event.preventDefault();
    });
}

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const num = document.getElementById("num");
const pwd = document.getElementById("pwd");
const cnfpwd = document.getElementById("cnfpwd");
const errorBoxes = document.querySelectorAll(".error");
const form = document.querySelector("form");





function checker(){
    if(!fname.checkValidity()){
        fname.nextSibling.textContent = fname.validationMessage;
    } else {
        fname.nextSibling.textContent = "";
    }
    

    if(!lname.checkValidity()){
        lname.nextSibling.textContent = lname.validationMessage;
    } else {
        lname.nextSibling.textContent = "";
    }

    if(!email.checkValidity()){
        email.nextSibling.textContent = email.validationMessage;
    } else {
        email.nextSibling.textContent = "";
    }

    if(!num.checkValidity()){
        num.nextSibling.textContent = num.validationMessage;
    } else {
        num.nextSibling.textContent = ""; 
    }

    if(!pwd.checkValidity()){
        pwd.nextSibling.textContent = pwd.validationMessage;
    }
    else {
        pwd.nextSibling.textContent = "";
    }

    if(!cnfpwd.checkValidity()){
        cnfpwd.nextSibling.textContent = cnfpwd.validationMessage;
    } else {
        cnfpwd.nextSibling.textContent = "";
    }
}
