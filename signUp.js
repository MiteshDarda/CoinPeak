const loginBTN = document.getElementById('loginBTN')
const signUpBTN = document.getElementById('signUpBTN')
let fullName = document.getElementById('fullName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')
let noName = document.getElementById('noName')
let noEmail = document.getElementById('noEmail')
let noPassword = document.getElementById('noPassword')
let invalidPass = document.getElementById('invalidPass')
let invalidEmail = document.getElementById('invalidEmail')
let incorrectPass = document.getElementById('incorrectPass')
let registeredEmail = document.getElementById('registeredEmail')
let signUpForm = document.getElementById('signUpForm')
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let flag = false;
loginBTN.addEventListener('click', () => {
    location.href = "index.html"
})
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    flag = false
    noName.classList.add('hidden')
    noEmail.classList.add('hidden')
    noPassword.classList.add('hidden')
    invalidPass.classList.add('hidden')
    invalidEmail.classList.add('hidden')
    incorrectPass.classList.add('hidden')
    registeredEmail.classList.add('hidden')
    fullName.classList.remove('invalidInput')
    email.classList.remove('invalidInput')
    password.classList.remove('invalidInput')
    password2.classList.remove('invalidInput')
    if (fullName.value.length === 0) {
        fullName.classList.add('invalidEmail')
        noName.classList.remove('hidden')
        noName.classList.add('invalid')
        fullName.classList.add('invalidInput')
        flag = true
    }
    if (email.value.length === 0) {
        noEmail.classList.remove('hidden')
        noEmail.classList.add('invalid')
        email.classList.add('invalidInput')
        flag = true
    }
    if (password.value.length === 0) {
        password.classList.add('empty')
        noPassword.classList.remove('hidden')
        noPassword.classList.add('invalid')
        password.classList.add('invalidInput')
        password2.classList.add('invalidInput')
        flag = true

    }
    if (!email.value.match(emailFormat) && email.value.length != 0) {
        invalidEmail.classList.remove('hidden')
        invalidEmail.classList.add('invalid')
        email.classList.add('invalidInput')
        flag = true
    }
    if ((password.value.length < 6 || password.value.length > 10) && password.value.length != 0) {
        invalidPass.classList.remove('hidden')
        password.classList.add('invalidInput')
        password2.classList.add('invalidInput')
        invalidPass.classList.add('invalid')
        flag = true
    }
    else if (password.value != password2.value) {
        incorrectPass.classList.remove('hidden')
        password.classList.add('invalidInput')
        password2.classList.add('invalidInput')
        incorrectPass.classList.add('invalid')
        flag = true
    }
    if (localStorage.getItem(`${email.value}`)) {
        registeredEmail.classList.remove('hidden')
        registeredEmail.classList.add('invalid')
        email.classList.add('invalidInput')
        flag = true
    }
    else if (!flag) {
        localStorage.setItem(`${email.value}`, JSON.stringify({ 'Email': email.value, 'Password': password.value, 'Name': fullName.value }))
        fullName.value = ""
        password2.value = ""
        password.value = ""
        email.value = ""
        alert('Registered Successfully')
        location.href = "index.html"
    }
})
