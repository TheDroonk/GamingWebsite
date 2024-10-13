document.addEventListener('wheel', function(e) {
  if (e.ctrlKey) {
      e.preventDefault();
  }
}, { passive: false });

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
      e.preventDefault();
  }
});


/* nav toggle */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})