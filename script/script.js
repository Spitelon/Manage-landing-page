document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener('click', function () {
        toggleMenu();
    });

    overlay.addEventListener('click', function () {
        closeMenu();
    });

    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        menuIcon.innerHTML = navMenu.classList.contains('active') ? '&#10006;' : '&#9776;';
    }

    function closeMenu() {
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
});

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: {
        0: {
          dots: true
        },
        768: {
            dots: false
        }
      }
 });

 function validateEmail() {
    var emailInput = document.getElementById('emailInput');
    var errorMessage = document.getElementById('errorMessage');

    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value === '' || !emailRegex.test(emailInput.value)) {
      emailInput.style.border = '1px solid rgb(255, 67, 67)';
      emailInput.style.color = 'rgb(255, 67, 67)';
      errorMessage.style.display = 'block';
    } else {
      emailInput.style.border = 'none';
      errorMessage.style.display = 'none';
      emailInput.style.color = 'var(--dark-grayish-blue)';
      emailInput.value = '';
    }
  }