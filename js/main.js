window.onload = function () {
    document.getElementById("loader").style.display = "none";
  }

let wid = window.matchMedia('(max-width: 991px)');
// Navbar Scroll
window.onscroll = function() {
  let nav = document.querySelector('header nav');
  let ScrollTop = document.querySelector('#scrollTop');
  let height = document.documentElement.scrollTop || document.body.scrollTop;
  let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (document.documentElement.scrollTop > 160 || document.body.scrollTop > 160) {
    if ((nav.classList.contains('navbar-fixed')) == false) {
      nav.classList.add('navbar-fixed');
    }
    ScrollTop.classList.add('scroll-top');
    ScrollTop.style.width = ((height / pageHeight) * 100) + '%';
  } else {
    if (wid.matches) {
      ScrollTop.classList.add('scroll-top');
      ScrollTop.style.width = ((height / pageHeight) * 100) + '%';
    } else {
      nav.classList.remove('navbar-fixed');
      scrollTop.classList.remove('scroll-top');
    }
  }
  if (document.documentElement.scrollTop > 160 || document.body.scrollTop > 160) {
    nav.classList.add('navbar-top');
  } else {
    if (wid.matches) {
      
    } else {
      nav.classList.remove('navbar-top');
    }
  }
}

//Media query
fixedNavbar(wid);

function fixedNavbar(wid) {
  let nav = document.querySelector('header nav');
  let ScrollTop = document.querySelector('#scrollTop');
  if (wid.matches) {
    if ((nav.classList.contains('navbar-fixed')) == false) {
      nav.classList.add('navbar-fixed');
      ScrollTop.classList.add('scroll-top');
      nav.classList.add('navbar-top');
    } else {
      document.querySelector('header nav div.nav-link').style.height = 'auto';
      console.log('h');
    }
  }
  console.log('ar');
}

//Open Nav 
function openNav() {
  let menu = document.querySelector('header nav div.nav-link');
  if (menu.style.height == '350px') {
    menu.style.height = '0px';
    menu.style.padding = '0 0 !important';
  } else {
    menu.style.height = '350px';
    menu.style.padding = '8px 16px';
    menu.style.paddingLeft = '0';
  }
}

/// testimonial slider
let currentSlide = 1;
showSlide(currentSlide);

function pushSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

function showSlide(n) {
  slides = document.querySelectorAll('section.section-3 div.container div.row div.col-md-6 div.slide-container div.slide');
  if(n > slides.length - 1) {
    n = 0;
    currentSlide = 0;
  } else if (n < 0) {
    n = slides.length - 1;
    currentSlide = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[n].style.display = 'block';
}


/// schedule section 7
let section7 = document.querySelector('section.section-7');

let weeks = section7.querySelectorAll('div.container div.weeks li');
for (let i = 0; i < weeks.length; i++) {
  weeks[i].addEventListener('click', function() {
    for (let j = 0; j < weeks.length; j++) {
      weeks[j].classList.remove('active');
    }
    weeks[i].classList.add('active');
    let dayName = weeks[i].innerText;

    let days = section7.querySelectorAll('div.container div.weeks-day div.col-md-4 div.weeks-day-inner');
    
    for (let k = 0; k < days.length; k++) {
      days[k].classList.remove('active');
    }
    for (let k = 0; k < days.length; k++) {
      if (days[k].classList.contains(dayName)) {
        days[k].classList.add('active');
      }
    }


  })
}


// Scroll to top
function scrollToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}


$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


