const filterButtons = document.querySelectorAll('.filter-pill');
const serviceCards = document.querySelectorAll('.service-card');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    serviceCards.forEach(function (card) {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
