let email = document.getElementById('email')
let password = document.getElementById('password')
const loginBTN = document.getElementById('loginBTN')
const signUpBTN = document.getElementById('signUpBTN')
let wrongEmail = document.getElementById('wrongEmail')
let wrongPassword = document.getElementById('wrongPassword')
let noEmail = document.getElementById('noEmail')
let noPassword = document.getElementById('noPassword')
const from=document.getElementById('form')
if(JSON.parse(localStorage.getItem('isLoggedIn'))){
    location.href="main.html"
}
signUpBTN.addEventListener('click', () => {
    location.href = "signUp.html"
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    wrongPassword.classList.add('hidden')
    wrongEmail.classList.add('hidden')
    email.classList.remove('invalidInput')
    password.classList.remove('invalidInput')
    noPassword.classList.add('hidden')
    noEmail.classList.add('hidden')
    if (email.value.length === 0) {
        noEmail.classList.remove('hidden')
        noEmail.classList.add('invalid')
        email.classList.add('invalidInput')

    } else if (localStorage.getItem(`${email.value}`)) {
        if (password.value.length === 0) {
            noPassword.classList.remove('hidden')
            noPassword.classList.add('invalid')
            password.classList.add('invalidInput')
        }else{
        if (JSON.parse(localStorage.getItem(`${email.value}`)).Email === email.value
            && JSON.parse(localStorage.getItem(`${email.value}`)).Password == password.value) {
                location.href = "main.html"
                localStorage.setItem('isLoggedIn',JSON.stringify({ 'Flag':true, 'fullName': JSON.parse(localStorage.getItem(`${email.value}`)).Name }))
        }
        else if (JSON.parse(localStorage.getItem(`${email.value}`)).Email === email.value
            && !(JSON.parse(localStorage.getItem(`${email.value}`)).Password == password.value)) {
            wrongPassword.classList.add('invalid')
            wrongPassword.classList.remove('hidden')
            password.classList.add('invalidInput')
        }
    }
        
    }
    else {
        wrongEmail.classList.add('invalid')
        wrongEmail.classList.remove('hidden')
        email.classList.add('invalidInput')
    }
})
