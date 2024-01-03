let searchform = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

let shoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active')
    searchform.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
    searchform.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchform.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
}

window.onscroll = () =>{
    searchform.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

let countDate = new Date('November 17, 2023 00:00:00').getTime();

function CountDown(){

    let now = new Date ().getTime();
    let gap = countDate - now;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    CountDown();
},1000)
