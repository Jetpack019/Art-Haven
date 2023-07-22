const hoverText = document.querySelector('.hover-text');
const infoBox = document.querySelector('.info-box');
const toggleIcon = document.querySelector('.toggle-icon');

hoverText.addEventListener('mouseenter', () => {
  infoBox.style.display = 'block';
});

hoverText.addEventListener('mouseleave', () => {
  infoBox.style.display = 'block';
});

infoBox.addEventListener('mouseleave', () => {
  infoBox.style.display = 'none';
});

toggleIcon.addEventListener('click', () => {
  infoBox.style.display = infoBox.style.display === 'none' ? 'block' : 'none';
});

infoBox.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV') {
    const clickedValue = event.target.textContent;
    console.log('Clicked value:', clickedValue);
    // Perform your desired action with the clicked value
  }
});
