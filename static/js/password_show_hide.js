const pswrdField = document.querySelector(".form .pw input[type='password']"),
toggleIcon_pw = document.querySelector(".form .field .password");
const cpswrdField = document.querySelector(".form .cpw input[type='password']"),
toggleIcon_cpw = document.querySelector(".form .field .confirm_password");

toggleIcon_pw.onclick = () =>{
  if(pswrdField.type === "password"){
    pswrdField.type = "text";
    toggleIcon_pw.classList.add("active");
  }else{
    pswrdField.type = "password";
    toggleIcon_pw.classList.remove("active");
  }
}
  toggleIcon_cpw.onclick = () =>{
  if(cpswrdField.type === "password"){
    cpswrdField.type = "text";
    toggleIcon_cpw.classList.add("active");
  }else{
    cpswrdField.type = "password";
    toggleIcon_cpw.classList.remove("active");
  }
}
