const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

function auth(){
  var email= document.getElementById("email").value;
  var password= document.getElementById("password").value;
  if(email=="abc@gmail.com" && password=="san"){
    window.location.assign("index.html");
    alert("Login Successfully");
  }
  else{
    alert("Invalid Information");
    return;
  } 

}


