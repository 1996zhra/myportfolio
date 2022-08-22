'use strict';

//variable
const typeWriterTxt = ['I am Front-end Developer.'];
const typeWriter = document.querySelector('.type-writer');
const speed = 100;
let txtPosition = 0;
const home = document.querySelector('#home');
const about = document.querySelector('.about');
const resume = document.querySelector('.resume');
const contact = document.querySelector('.contact');
const social = document.querySelector('.social-links');
const active = document.getElementById('active');
const aboutSec = document.getElementById('about');
const resumeSec = document.getElementById('resume');
const contactSec = document.getElementById('contact');
const aboutContainer = document.querySelector('.about-container');
const slide = document.querySelectorAll('.slide');
const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');
const slide3 = document.querySelector('.slide-3');
const slide4 = document.querySelector('.slide-');
const slide5 = document.querySelector('.slide-5');
const dotContainer = document.querySelector('.dot-container');
const dot = document.querySelectorAll('.dot');
const navbar = document.getElementById('nav');
const hambergur = document.querySelector('.hambergur');
const hambergurAfter = window.getComputedStyle(hambergur, '::after');
const hambergurBefore = window.getComputedStyle(hambergur, '::before');

// function

const typing = function () {
  typeWriter.innerHTML = typeWriterTxt[0].substring(0, txtPosition);

  if (txtPosition++ != typeWriterTxt[0].length) {
    typeWriter.innerHTML =
      typeWriterTxt[0].substring(0, txtPosition++) + '<span>|</span>';
    setTimeout(typing, speed);
  }
};

aboutSec.classList.add('hidden');
resumeSec.classList.add('hidden');
contactSec.classList.add('hidden');

const openpage = function () {
  social.classList.add('hidden');
  typing.style.display = 'none';
  home.classList.add('header');
  home.classList.remove('animation-close', 'home-section');
  home.classList.add('animation');
  active.classList.remove('home');
};

const setactivebutton = function () {
  const btn = document.querySelectorAll('.btn-me');
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove('menu-buttons-active');
  }
};

//events
window.addEventListener('load', typing);

document.querySelector('.home').addEventListener('click', function () {
  aboutSec.classList.add('hidden');
  resumeSec.classList.add('hidden');
  contactSec.classList.add('hidden');
  // navbar.classList.remove('navbar-small');
  if (navbar.classList.contains('navbar-small')) {
    navbar.style.display = 'none';
  }
});

about.addEventListener('click', function (e) {
  console.log(e.target.innerHTML);
  if (e.target.innerHTML === 'about') {
    setactivebutton();
    about.classList.add('menu-buttons-active');

    openpage();
  }
  aboutSec.classList.remove('hidden');
  resumeSec.classList.add('hidden');
  contactSec.classList.add('hidden');
  if (navbar.classList.contains('navbar-small')) {
    navbar.style.display = 'none';
  }
});

resume.addEventListener('click', function () {
  setactivebutton();
  resume.classList.add('menu-buttons-active');
  openpage();
  aboutSec.classList.add('hidden');
  resumeSec.classList.remove('hidden');
  contactSec.classList.add('hidden');
  if (navbar.classList.contains('navbar-small')) {
    navbar.style.display = 'none';
  }
});

contact.addEventListener('click', function () {
  setactivebutton();
  contact.classList.add('menu-buttons-active');
  openpage();
  contactSec.classList.remove('hidden');
  aboutSec.classList.add('hidden');
  resumeSec.classList.add('hidden');
  // navbar.style.display = 'none';
  if (navbar.classList.contains('navbar-small')) {
    navbar.style.display = 'none';
  }
});

active.addEventListener('click', function () {
  setactivebutton();
  social.classList.remove('hidden');
  home.classList.remove('header');
  home.classList.remove('animation');
  home.classList.add('animation-close');
  home.classList.add('home-section');
  typing.style.display = 'block';
  active.classList.add('home');
});

//slides

let currslide = 0;
const maxSlide = slide.length;

slide.forEach((s, i) => {
  s.style.transform = `translateX(${102 * i}%)`;
});
const goToSlide = function (slides) {
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${102 * (i - slides)}%)`)
  );
};
goToSlide(0);
const nextSlide = function () {
  if (currslide === maxSlide - 3) {
    currslide = 0;
    // activateDots(currslide + 2);
  } else {
    currslide++;
  }

  goToSlide(currslide);
  activateDots(currslide);
};

const prevSlide = function () {
  if (currslide === 0) {
    currslide = maxSlide - 3;
    // activateDots(currslide + 2);
  } else {
    currslide--;
  }

  goToSlide(currslide);
  activateDots(currslide);
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    nextSlide();
  }

  if (e.key === 'ArrowLeft') {
    prevSlide();
  }
});

//dots

const createDots = function () {
  slide.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class='dot' data-slide='${i}'>
    </button>`
    );
  });
};
createDots();

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDots(slide);
  }
});

const activateDots = function (slide) {
  document
    .querySelectorAll('.dot')
    .forEach(dot => dot.classList.remove('active'));

  document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
};
activateDots(0);

//navbar
navbar.classList.remove('navbar-small');
hambergur.style.display = 'none';

hambergur.addEventListener('click', function () {
  if (hambergur.classList.contains('if-hambergur')) {
    navbar.style.display = 'none';
    hambergur.classList.remove('if-hambergur');
  } else {
    navbar.classList.add('navbar-small');
    navbar.style.display = 'block';
    hambergur.classList.add('if-hambergur');
  }
});

navbar.addEventListener('click', function () {
  if (navbar.classList.contains('navbar-small')) {
    navbar.style.display = 'none';
    hambergur.classList.remove('if-hambergur');
  }
  return;
});
