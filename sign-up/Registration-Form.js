
var fristName = document.querySelector(".frist")
var userName = document.querySelector(".Username")
var email = document.querySelector(".email")
var password = document.querySelector(".pass")
var confirmPassword = document.querySelector(".pass-conf")
var btn = document.querySelector("button")

var error = document.querySelector(".error")
var emailError = document.querySelector(".errr")
var confirms = document.querySelector(".confirmPass")
var passLength = document.querySelector(".passLength")


btn.addEventListener("click", function (event) {
    event.preventDefault();

    if (fristName.value !== '' && isNaN(fristName.value) && isNaN(userName.value) && userName.value !== '' && email.value !== '' && email.value !== '' && password.value !== '' && confirmPassword.value !== '') {

        if (email.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")) {
            if (password.value === confirmPassword.value) {
                if (password.value.length >= 8) {
                    passLength.classList.add("hedden")
                    // I'm Hear man !!!!!!
                    localStorage.setItem("FristName", fristName.value)
                    localStorage.setItem("LastName", userName.value)
                    localStorage.setItem("email", email.value)
                    localStorage.setItem("Password", password.value)

                    window.location.href = '../sing_in/Sign-inH.html'

                } else {
                    confirms.classList.add("conf")
                    passLength.classList.remove("hedden")
                    emailError.classList.add("emailErro")
                    error.classList.add("error")
                }

            } else {
                emailError.classList.add("emailErro")
                error.classList.add("error")
                confirms.classList.remove("conf")
            }

        } else {
            emailError.classList.remove("emailErro")
            error.classList.add("error")
        }

    } else {
        error.classList.remove("error")
    }


})


















