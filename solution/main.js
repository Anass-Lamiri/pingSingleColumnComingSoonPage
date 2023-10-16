
let input = document.querySelector('.input_text');
let submit = document.querySelector('.submit');

// console.log(input.checkValidity());
function validity() {
    if (!input.checkValidity()) {
        console.log("invalid");
    }else{
        console.log("valid");
    }
}

submit.addEventListener("click", validity())