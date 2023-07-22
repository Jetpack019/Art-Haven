  // JavaScript for the image slider
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider-image');

  let counter = 0;
  const interval = 3000; // Change slide every 3 seconds

  function slide() {
    images.forEach(image => (image.style.display = 'none'));
    counter++;
    if (counter === images.length) {
      counter = 0;
    }
    images[counter].style.display = 'block';
  }

  slide(); // Show the first image initially
  setInterval(slide, interval);