const form = document.getElementById("form")
// Input fields
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
// Labels
const passwordLabel = document.getElementById("password-label")
const nameLabel = document.getElementById("name-label")
const emailLabel = document.getElementById("email-label")



form.addEventListener("submit", (e) => {
  let errors = 0
  
  // Name Validation
  if(name.value === "" || name.value == null){
    nameLabel.innerHTML = "You MUST enter a name"
    name.style.borderColor = "red"
    nameLabel.style.color = "red"
    errors +=1
  }else{
    nameLabel.innerHTML = "Name:"
    name.style.borderColor = "#49c1a2"
    nameLabel.style.color = "#49c1a2"
  }

  // Password Validation
  if (password.value.length <= 6){
    password.value = ""
    passwordLabel.innerHTML = "Password must be 6 or more characters"
    passwordLabel.style.color = "red"
    password.style.borderColor = "red"
    errors +=1
  }else{
    password.style.borderColor = "#49c1a2"
    passwordLabel.innerHTML = "Password:"
    passwordLabel.style.color = "#49c1a2"
  }


  // Email Validation
  if(email.value.length < 10){
    errors += 1
    email.style.borderColor = "red"
    emailLabel.innerHTML = "That Email is invalid"
    emailLabel.style.color = "red"
  }else{
    email.style.borderColor = "#49c1a2"
    emailLabel.innerHTML = "Email:"
    emailLabel.style.color = "#49c1a2"
  }


  if (errors != 0){
    e.preventDefault()
  }
})