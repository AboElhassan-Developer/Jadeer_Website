let lastScrollY = window.scrollY;
let navbar = document.querySelector(".navbar");
let timeout;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  if (currentScrollY > lastScrollY) {
    navbar.classList.add("hide");

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      navbar.classList.remove("hide");
    }, 1000);
  } else {
    navbar.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

//   ---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector(".header");
  const headerTexts = document.querySelectorAll('.header-text h1, .header-text h2');

  const images = [
    "./assets/images/background/news-2.jpg",
    "./assets/images/background/2.jpg",
    "./assets/images/background/9.jpg",  
    "./assets/images/background/5.jpg",
  ];

  let current = 0;

  function triggerAnimation() {
    headerTexts.forEach(el => {
      el.classList.remove('re-animate-active');
      void el.offsetWidth;
      el.classList.add('re-animate', 're-animate-active');
    });
  }

  function changeBackground() {
    current = (current + 1) % images.length;
    header.style.backgroundImage = `url('${images[current]}')`;
    header.style.backgroundSize = '100%';
    header.style.backgroundPosition = 'center';
    header.style.backgroundRepeat = 'no-repeat';

    triggerAnimation();
  }
  triggerAnimation();

  setInterval(changeBackground, 5000);
});




// -----------------------------------------------------------------------


const swiper = new Swiper('.mySwiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

