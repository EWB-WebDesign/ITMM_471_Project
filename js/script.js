function validate(){

  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (password != confirm_password) {
    alert("Passwords Don't Match");
    return false;
  }
  else{
    alert("Thank You For Signing Up!");
    window.open("https://ewb-webdesign.github.io/ITMM_471_Project/");
  }
}
