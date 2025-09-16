//menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    login.classList.remove('active');
}


//login form toggle

let login = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () =>{
    login.classList.toggle('active')
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
}

document.querySelector('.adduser').onclick = () =>{
  login.classList.toggle('active')
  window.location.href = "registration.html";
  document.querySelector('.text a').onclick = () =>{
  window.location.href = "registration.html";
  }
}
    


    