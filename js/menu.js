document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(fade => observer.observe(fade));
});

const cards = document.querySelectorAll('.coffee-card');

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();

    if (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      card.classList.add('touch-hover');
    } else {
      card.classList.remove('touch-hover');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    title: "Добро пожаловать в меню Aura!",
    text: "Советуем выключить VPN для корректной работы сайта ✅",
    timer: 3500,
    showConfirmButton: false,
    toast: true,
    position: 'top-start'
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const scrollSections = document.querySelectorAll(
    ".coffee-scroll, .dessert-scroll, .tea-scroll"
  );

  scrollSections.forEach(section => {

    const cards = section.querySelectorAll(".coffee-card");

    function revealCards() {
      const containerRect = section.getBoundingClientRect();

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();

        if (cardRect.left < containerRect.right - 50) {
          card.classList.add("show");
        }
      });
    }

    section.addEventListener("scroll", revealCards, { passive: true });

    revealCards();
  });

});