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

form.addEventListener("input", function() {
    setInterval(checker, 500);
})


function checker(){
    if(!fname.checkValidity()){
        errorBoxes[0].textContent = fname.validationMessage;
    } else {
        errorBoxes[0].textContent = "";
    }
    

    if(!lname.checkValidity()){
        errorBoxes[1].textContent = lname.validationMessage;
    } else {
        errorBoxes[1].textContent = "";
    }

    if(!email.checkValidity()){
        errorBoxes[2].textContent = email.validationMessage;
    } else {
        errorBoxes[2].textContent = "";
    }

    if(!num.checkValidity()){
        errorBoxes[3].textContent = num.validationMessage;
    } else {
        errorBoxes[3].textContent = ""; 
    }

    if(!pwd.checkValidity()){
        errorBoxes[4].textContent = pwd.validationMessage;
    }
    else {
        errorBoxes[4].textContent = "";
    }

    if(!cnfpwd.checkValidity()){
        errorBoxes[5].textContent = cnfpwd.validationMessage;
    } else {
        errorBoxes[5].textContent = "";
    }

    if (pwd.value !== cnfpwd.value) {
        errorBoxes[4].textContent, errorBoxes[5].textContent = "Passwords do not Match!";
    }
}
