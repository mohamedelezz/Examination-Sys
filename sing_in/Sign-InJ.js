

var email = document.querySelector(".email")
var password = document.querySelector(".pass")

var btn = document.querySelector("button")

var error = document.querySelector(".error")
var emailError = document.querySelector(".errr")
var passLength = document.querySelector(".passLength")
var unCorrect = document.querySelector(".invite")
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("Password"));
btn.addEventListener("click", function (event) {
    event.preventDefault();

    if (email.value !== '' && password.value !== '') {
        if (email.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")) {
            if (password.value.length >= 8) {
                passLength.classList.add("hedden")

                if (localStorage.getItem("email") == email.value &&
                    localStorage.getItem("Password") == password.value) {

                    unCorrect.classList.add("unCorrect")
                    location.replace('../home-page/home.html')

                } else {
                    unCorrect.classList.remove("unCorrect")
                    emailError.classList.add("emailErro")
                    error.classList.add("error")
                }

            } else {

                passLength.classList.remove("hedden")
                emailError.classList.add("emailErro")
                error.classList.add("error")
            }


        } else {
            emailError.classList.remove("emailErro")
            error.classList.add("error")
        }

    } else {
        error.classList.remove("error")
    }



})


















