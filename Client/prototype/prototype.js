// swiper 
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
      
  }
  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
  

//Dropdown
const profile = document.getElementById('profile');
const dropdown = document.getElementById('dropdown');

profile.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (!profile.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});


// JavaScript to toggle popup
const loginBtn = document.getElementById('loginBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Show popup
loginBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close popup
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close popup if clicked outside
window.addEventListener('click', (e) => {
  if (e.target === popup) {
      popup.style.display = 'none'; // Only hide the popup if clicked outside
  }
});
