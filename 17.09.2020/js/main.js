// FORM
var myForm1 = document.querySelector("#registration .registration #my_form ");
myForm1.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("salam");
var myEmail = document.querySelector("#registration .registration #my_form .form-accounts .form-account1 input[name='email']");
var myrepEmail = document.querySelector("#registration .registration #my_form .form-accounts .form-account1 input[name='repemail']");
var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
myEmail.nodeValue.match(regexEmail);

// Email
myEmail.addEventListener("blur", function(){

    if (myEmail.value == "" || myEmail.value == null){
        this.style.border = "1px solid red";
    }else{
        this.style.border = "";
    }

});
myrepEmail.addEventListener("blur", function(){
    if(myrepEmail.value == myEmail.value){
        myrepEmail.style.border = "";
    }else{
        myrepEmail.style.border = "1px solid red";
    }
});



});

