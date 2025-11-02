const form = document.getElementById("validatorForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const toggleBtn = document.getElementById('togglePwd');
const eyeIcon = document.getElementById('eyeIcon');



form.addEventListener("submit", (e) => {
  e.preventDefault();

 // Regex patterns
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

document.querySelector("#emailError").textContent="";
document.querySelector("#passwordError").textContent="";

let emailAns = emailRegex.test(email.value);
let passwordAns = emailRegex.test(password.value);

let isValid=true

console.log(emailAns);
console.log(passwordAns);


if(!emailAns)
{
  document.querySelector("#emailError").textContent="Email is incorrect"
  document.querySelector("#emailError").style.display="block"
 isValid=false
}

if(!passwordAns)
{
  document.querySelector("#passwordError").textContent="Password is incorrect"
   document.querySelector("#passwordError").style.display="block"
  isValid=false
}

if( isValid){
   document.querySelector("#successMsg").textContent="Everthing is correct"
}


});

toggleBtn.addEventListener('click', () => {
  if(passwordInput.type === 'password') {
    passwordInput.type = 'text';               // show password
    eyeIcon.classList.remove('ri-eye-off-line');
    eyeIcon.classList.add('ri-eye-line');      // open eye
  } else {
    passwordInput.type = 'password';           // hide password
    eyeIcon.classList.remove('ri-eye-line');
    eyeIcon.classList.add('ri-eye-off-line');  // closed eye
  }
});