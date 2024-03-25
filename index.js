const signIn = document.querySelector('.signIn');
const signUp = document.querySelector('.signUp');
const signInBtn = document.querySelector('.signInBtn');
const signUpBtn = document.querySelector('.signUpBtn');

signUpBtn.addEventListener('click', () => {
    signIn.style.display = "none";
    signUp.style.display = "block";
})

signInBtn.addEventListener('click', () => {
    signIn.style.display = "block";
    signUp.style.display = "none";
})