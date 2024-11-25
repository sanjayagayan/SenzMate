// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  dots.forEach((dot, i) => {
    dot.className = i === index ? 'dot active' : 'dot';
  });
}

function currentSlide(index) {
  currentIndex = index - 1;
  showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);


let currentSegment = 1;
const totalSegments = 5;

// Cache elements
const popups = document.querySelectorAll('.popupNew');
const segments = document.querySelectorAll('.segment');

// Function to display the correct popup and highlight segment
function showPopup(segment) {
  // Hide all popups and remove active class
  popups.forEach((popup, index) => {
    popup.style.display = index + 1 === segment ? 'block' : 'none';
  });

  segments.forEach((seg, index) => {
    seg.classList.toggle('active', index + 1 === segment);
  });
}

// Cycle through segments and update popup
function cycleSegments() {
  showPopup(currentSegment);
  currentSegment = (currentSegment % totalSegments) + 1;
}

// Initialize and start the cycle
cycleSegments();
setInterval(cycleSegments, 3000);
